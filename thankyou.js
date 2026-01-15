const qs = (s) => document.querySelector(s);

const params = new URLSearchParams(window.location.search);
const paid = params.get("paid");
const sessionId = params.get("session_id");

const pill = qs("#payment-pill");
if (pill) {
  pill.style.display = paid === "true" ? "inline-flex" : "none";
  const sid = qs("#session-id");
  if (sid) sid.textContent = sessionId || "";
}

const prefill = (id, value) => {
  const el = document.getElementById(id);
  if (!el || value === null || value === undefined) return;
  if (String(el.value || "").trim() !== "") return;
  el.value = value;
};

prefill("customerName", params.get("name"));
prefill("phone", params.get("phone"));
prefill("email", params.get("email"));
prefill("rentalDate", params.get("date"));
prefill("productsRented", params.get("cart"));

const form = qs("#waiver-form");
const errorBox = qs("#form-error");
const submitBtn = qs("#submit-btn");
const screenForm = qs("#screen-form");
const screenSuccess = qs("#screen-success");

const setError = (msg) => {
  if (!errorBox) return;
  if (!msg) {
    errorBox.style.display = "none";
    errorBox.textContent = "";
    return;
  }
  errorBox.textContent = msg;
  errorBox.style.display = "block";
};

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setError("");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    try {
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      payload.accepted = payload.accepted === "true";
      payload.sessionId = sessionId || "";

      const res = await fetch("/.netlify/functions/submit-waiver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => null);
        const msg =
          (j && (j.error || j.message)) ||
          "We couldn't submit your waiver. Please try again.";
        throw new Error(msg);
      }

      if (screenForm) screenForm.style.display = "none";
      if (screenSuccess) screenSuccess.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err && err.message ? err.message : "Submission failed.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Waiver";
      }
    }
  });
}

