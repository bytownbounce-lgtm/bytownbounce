exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  console.log("resend api", RESEND_API_KEY);
  const FROM_EMAIL =
    process.env.BOOKING_FROM_EMAIL ||
    process.env.WAIVER_FROM_EMAIL ||
    "info@bytownbounce.ca";
  const ADMIN_EMAIL = process.env.BOOKING_ADMIN_EMAIL || "info@bytownbounce.ca";

  if (!RESEND_API_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Missing RESEND_API_KEY" }),
    };
  }

  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body || "", "base64").toString("utf8")
    : event.body || "";
  const contentType = String(
    (event.headers &&
      (event.headers["content-type"] || event.headers["Content-Type"])) ||
      ""
  ).toLowerCase();

  let payload;
  try {
    if (contentType.includes("application/json")) {
      payload = JSON.parse(rawBody || "{}");
    } else {
      const params = new URLSearchParams(rawBody);
      payload = Object.fromEntries(params.entries());
    }
  } catch (e) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const safe = (v) =>
    String(v ?? "")
      .replace(/\s+/g, " ")
      .trim();

  const name = safe(payload.name);
  const phone = safe(payload.phone);
  const email = safe(payload.email);
  const date = safe(payload.date);
  const message = safe(payload.message);
  const cart = safe(payload.cart);

  if (!name || !phone || !date || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "Missing required fields (name, phone, date, message)",
      }),
    };
  }

  const subject = `New Booking Request - ${name} (${date})`;

  const html = `
    <div style="font-family: Arial, sans-serif; color:#111;">
      <h2 style="color:#ff5e84; margin:0 0 12px;">New Booking Request</h2>
      <table style="border-collapse: collapse; width:100%; max-width:740px;">
        <tr><td style="padding:6px 0; font-weight:700;">Name</td><td style="padding:6px 0;">${name}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Email</td><td style="padding:6px 0;">${
          email || "—"
        }</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Event Date</td><td style="padding:6px 0;">${date}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700; vertical-align: top;">Cart</td><td style="padding:6px 0;">${
          cart || "—"
        }</td></tr>
        <tr><td style="padding:6px 0; font-weight:700; vertical-align: top;">Notes</td><td style="padding:6px 0; white-space: pre-wrap;">${message}</td></tr>
      </table>
      <p style="margin:16px 0 0; font-size:12px; color:#444;">
        Sent from bytownbounce.ca booking form
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject,
        html,
        reply_to: email || undefined,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, errText);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to send booking email" }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send booking email" }),
    };
  }
};
