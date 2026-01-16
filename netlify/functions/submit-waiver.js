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

  const { PDFDocument, StandardFonts } = require("pdf-lib");

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.WAIVER_FROM_EMAIL || "info@bytownbounce.ca";
  const ADMIN_EMAIL = process.env.WAIVER_ADMIN_EMAIL || "info@bytownbounce.ca";

  if (!RESEND_API_KEY || !FROM_EMAIL) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error:
          "Missing email configuration. Set RESEND_API_KEY and WAIVER_FROM_EMAIL.",
      }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const requiredFields = [
    "customerName",
    "phone",
    "email",
    "rentalDate",
    "location",
    "productsRented",
    "signatureName",
    "signatureDate",
    "signatureDataUrl",
    "printedName",
    "relationship",
    "accepted",
  ];

  for (const field of requiredFields) {
    if (
      payload[field] === undefined ||
      payload[field] === null ||
      String(payload[field]).trim() === ""
    ) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: `Missing field: ${field}` }),
      };
    }
  }

  if (payload.accepted !== true && payload.accepted !== "true") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Waiver must be accepted" }),
    };
  }

  const customerEmail = String(payload.email).trim();
  const customerName = String(payload.customerName).trim();

  const safe = (v) =>
    String(v ?? "")
      .replace(/\s+/g, " ")
      .trim();

  const waiverTextExact = `Bytown Bounce – Liability Waiver & Release of Claims 
 (Participant / Customer Waiver – Must be signed for every booking) 
 Event / Rental Information Customer Name: _______________________________ Phone: _______________________________ Email: _______________________________ Rental Date: _______________________________ Location (Address): _______________________________ Products Rented: _______________________________ (e.g., Classic Rainbow Castle, Mega Water Slides, etc.) 
 Assumption of Risk I, the undersigned, understand and acknowledge that the use of inflatable bouncy castles, slides, obstacle courses, water slides, arcade games, concessions, tables, chairs, tents, and other party rental equipment ("Equipment") provided by Bytown Bounce involves inherent and significant risks, including but not limited to: 
 Slips, trips, falls, collisions with other participants or equipment 
 Bouncing, jumping, sliding, climbing, or other physical activity 
 Contact with hard surfaces, ground, or other objects 
 Overexertion, fatigue, heart conditions, or other medical issues 
 Equipment malfunction, deflation, or structural failure (even with proper maintenance) 
 Weather conditions, wind, rain, or temperature extremes 
 Serious bodily injury, permanent disability, paralysis, or death 
 I voluntarily assume all risks, known and unknown, associated with the use of the Equipment, whether caused by negligence or otherwise. 
 Release of Liability & Waiver of Claims In consideration of being permitted to rent and/or use the Equipment, I hereby, on behalf of myself, my heirs, executors, administrators, successors, assigns, and any minors or guests participating under my booking: 
 1.Release, waive, discharge, and covenant not to sue Bytown Bounce, its owners, officers, employees, agents, contractors, insurers, and affiliates (collectively "Released Parties") from any and all liability, claims, demands, actions, causes of action, damages, costs, or expenses whatsoever arising out of or in any way related to any loss, damage, injury, or death that may be sustained by me, any minor participant, or any guest while using the Equipment, whether caused by the negligence of the Released Parties or otherwise. 
 2.Agree that this release extends to all claims, even those based on negligence, gross negligence, or failure to warn. 
 3.Agree to indemnify, defend, and hold harmless the Released Parties from any claims, demands, lawsuits, or expenses (including legal fees) brought by me, any participant, or third party arising from the use of the Equipment. 
 Parental/Guardian Consent (if applicable) If any participant is under 19 years of age, I confirm that I am the parent/legal guardian and I give permission for the minor(s) to use the Equipment. I accept full responsibility for their safety and assume all risks on their behalf. 
 Inspection & Maintenance I acknowledge that I have had the opportunity to inspect the Equipment and that it appears to be in good working order. I agree to immediately report any defects or concerns to Bytown Bounce staff. I understand that Bytown Bounce performs regular safety checks and maintenance, but I still assume all risks. 
 Rules & Supervision I agree to follow all safety rules provided by Bytown Bounce, including: 
 Maximum number of participants 
 Age/weight restrictions 
 No flips, rough play, or shoes 
 Constant adult supervision required 
 No use during high winds or storms 
 Failure to follow rules may result in immediate termination of the rental without refund. 
 No Alcohol / Drugs I agree that no participant will use the Equipment while under the influence of alcohol, drugs, or any substance that impairs judgment or coordination. 
 Photographs & Media I grant Bytown Bounce permission to take photos/videos of the event and use them for marketing purposes without compensation. 
 Severability If any provision of this waiver is found invalid or unenforceable, the remaining provisions shall remain in full force and effect. 
 Governing Law This agreement shall be governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ottawa, Ontario. 
 Acknowledgment I have read this entire document, understand its terms, and sign it freely and voluntarily without any inducement. I am at least 19 years of age (or the parent/guardian of all minors participating). 
 Signature: _______________________________ Date: ________________ Printed Name: _______________________________ Relationship to Participants (if signing for others): ________________ 
 Bytown Bounce Representative (optional): _______________________________ Date: ________________.`;

  const waiverFilledText = [
    waiverTextExact,
    "",
    "— Submitted Information —",
    `Customer Name: ${safe(payload.customerName)}`,
    `Phone: ${safe(payload.phone)}`,
    `Email: ${safe(payload.email)}`,
    `Rental Date: ${safe(payload.rentalDate)}`,
    `Location (Address): ${safe(payload.location)}`,
    `Products Rented: ${safe(payload.productsRented)}`,
    `Signature Name: ${safe(payload.signatureName)}`,
    `Signature Date: ${safe(payload.signatureDate)}`,
    `Printed Name: ${safe(payload.printedName)}`,
    `Relationship to Participants: ${safe(payload.relationship)}`,
    `Stripe Session ID: ${safe(payload.sessionId || "")}`,
  ].join("\n");

  const subject = `Bytown Bounce Waiver Signed - ${customerName}`;

  const toBase64 = (u8) => Buffer.from(u8).toString("base64");

  const stripDataUrlPrefix = (dataUrl) => {
    const match = /^data:.*?;base64,(.*)$/.exec(String(dataUrl));
    return match ? match[1] : null;
  };

  const buildPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const margin = 40;
    const fontSize = 10.5;
    const lineHeight = fontSize * 1.35;
    const maxWidth = pageWidth - margin * 2;

    const wrapLine = (line, f, size) => {
      const words = String(line).split(" ");
      const lines = [];
      let current = "";
      for (const w of words) {
        const next = current ? `${current} ${w}` : w;
        if (f.widthOfTextAtSize(next, size) <= maxWidth) {
          current = next;
        } else {
          if (current) lines.push(current);
          current = w;
        }
      }
      if (current) lines.push(current);
      return lines.length ? lines : [""];
    };

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    const drawText = (text, opts = {}) => {
      const f = opts.bold ? fontBold : font;
      const size = opts.size || fontSize;
      const lh = opts.lineHeight || size * 1.35;
      const paras = String(text).split("\n");
      for (const para of paras) {
        const wrapped = wrapLine(para, f, size);
        for (const ln of wrapped) {
          if (y - lh < margin) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            y = pageHeight - margin;
          }
          page.drawText(ln, { x: margin, y, size, font: f });
          y -= lh;
        }
      }
    };

    drawText("Bytown Bounce – Liability Waiver & Release of Claims", {
      bold: true,
      size: 14,
      lineHeight: 18,
    });
    y -= 6;
    drawText(
      `(Customer) ${safe(payload.customerName)} | ${safe(
        payload.email
      )} | ${safe(payload.phone)}`,
      { size: 11, lineHeight: 15 }
    );
    drawText(
      `Rental Date: ${safe(payload.rentalDate)} | Location: ${safe(
        payload.location
      )}`,
      {
        size: 11,
        lineHeight: 15,
      }
    );
    drawText(`Products Rented: ${safe(payload.productsRented)}`, {
      size: 11,
      lineHeight: 15,
    });
    y -= 8;

    drawText(waiverTextExact, { size: fontSize, lineHeight });
    y -= 10;

    const sigBase64 = stripDataUrlPrefix(payload.signatureDataUrl);
    if (sigBase64) {
      const sigBytes = Buffer.from(sigBase64, "base64");
      const png = await pdfDoc.embedPng(sigBytes);
      const pngDims = png.scale(1);
      const targetWidth = Math.min(320, maxWidth);
      const scale = targetWidth / pngDims.width;
      const targetHeight = pngDims.height * scale;

      if (y - (targetHeight + 60) < margin) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }

      drawText("Signature (Digital):", {
        bold: true,
        size: 12,
        lineHeight: 16,
      });
      page.drawImage(png, {
        x: margin,
        y: y - targetHeight,
        width: targetWidth,
        height: targetHeight,
      });
      y -= targetHeight + 8;

      drawText(`Signature Name: ${safe(payload.signatureName)}`, {
        size: 11,
        lineHeight: 15,
      });
      drawText(`Signature Date: ${safe(payload.signatureDate)}`, {
        size: 11,
        lineHeight: 15,
      });
    }

    drawText(`Printed Name: ${safe(payload.printedName)}`, {
      size: 11,
      lineHeight: 15,
    });
    drawText(
      `Relationship to Participants (if signing for others): ${safe(
        payload.relationship
      )}`,
      { size: 11, lineHeight: 15 }
    );
    drawText(`Stripe Session ID: ${safe(payload.sessionId || "")}`, {
      size: 10,
      lineHeight: 14,
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  const sendEmail = async ({ to, subject, html, attachmentBase64 }) => {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [to],
        subject,
        html,
        attachments: [
          {
            filename: `BytownBounce-Waiver-${safe(payload.rentalDate)}-${safe(
              payload.customerName
            )}.pdf`,
            content: attachmentBase64,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`Email send failed (${res.status}): ${errText}`);
    }
  };

  try {
    const pdfBytes = await buildPdf();
    const pdfBase64 = toBase64(pdfBytes);

    const html = `
      <div style="font-family: Arial, sans-serif; color:#111;">
        <h2 style="color:#ff5e84; margin:0 0 12px;">Bytown Bounce – Waiver Submitted</h2>
        <p style="margin:0 0 12px;">A signed waiver PDF is attached.</p>
        <table style="border-collapse: collapse; width:100%; max-width:720px;">
          <tr><td style="padding:6px 0; font-weight:700;">Customer</td><td style="padding:6px 0;">${safe(
            payload.customerName
          )}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Email</td><td style="padding:6px 0;">${safe(
            payload.email
          )}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Phone</td><td style="padding:6px 0;">${safe(
            payload.phone
          )}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Rental Date</td><td style="padding:6px 0;">${safe(
            payload.rentalDate
          )}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Location</td><td style="padding:6px 0;">${safe(
            payload.location
          )}</td></tr>
          <tr><td style="padding:6px 0; font-weight:700;">Products</td><td style="padding:6px 0;">${safe(
            payload.productsRented
          )}</td></tr>
        </table>
        <p style="margin:16px 0 0; font-size:12px; color:#444;">Stripe Session ID: ${safe(
          payload.sessionId || ""
        )}</p>
      </div>
    `;

    await sendEmail({
      to: ADMIN_EMAIL,
      subject,
      html,
      attachmentBase64: pdfBase64,
    });
    await sendEmail({
      to: customerEmail,
      subject: "Your Bytown Bounce Waiver Copy",
      html,
      attachmentBase64: pdfBase64,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send waiver email" }),
    };
  }
};
