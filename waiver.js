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

prefill("rentalDate", params.get("date"));
prefill("productsRented", params.get("cart"));

const form = qs("#waiver-form");
const errorBox = qs("#form-error");
const submitBtn = qs("#submit-btn");
const signaturePad = qs("#signaturePad");
const clearSigBtn = qs("#clear-signature");

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

let isSigned = false;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let ctx = null;

const setupCanvas = () => {
  if (!signaturePad) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = signaturePad.getBoundingClientRect();
  signaturePad.width = Math.floor(rect.width * dpr);
  signaturePad.height = Math.floor(rect.height * dpr);
  ctx = signaturePad.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.lineWidth = 2.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#333";
  clearCanvas();
};

const clearCanvas = () => {
  if (!signaturePad || !ctx) return;
  const rect = signaturePad.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
  isSigned = false;
  signaturePad.classList.remove("invalid");
  updateSubmitState();
};

const getPoint = (e) => {
  const rect = signaturePad.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
};

const startDraw = (e) => {
  if (!ctx) return;
  isDrawing = true;
  const p = getPoint(e);
  lastX = p.x;
  lastY = p.y;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  e.preventDefault();
};

const moveDraw = (e) => {
  if (!isDrawing || !ctx) return;
  const p = getPoint(e);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  lastX = p.x;
  lastY = p.y;
  isSigned = true;
  signaturePad.classList.remove("invalid");
  updateSubmitState();
  e.preventDefault();
};

const endDraw = (e) => {
  if (!ctx) return;
  isDrawing = false;
  e.preventDefault();
};

const updateSubmitState = () => {
  if (!form || !submitBtn) return;
  const valid = form.checkValidity();
  submitBtn.disabled = !(valid && isSigned);
};

if (signaturePad) {
  setupCanvas();
  window.addEventListener("resize", setupCanvas);

  signaturePad.addEventListener("pointerdown", (e) => {
    signaturePad.setPointerCapture(e.pointerId);
    startDraw(e);
  });
  signaturePad.addEventListener("pointermove", moveDraw);
  signaturePad.addEventListener("pointerup", endDraw);
  signaturePad.addEventListener("pointercancel", endDraw);
}

if (clearSigBtn) clearSigBtn.addEventListener("click", clearCanvas);

if (form) {
  form.addEventListener("input", updateSubmitState);
  form.addEventListener("change", updateSubmitState);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setError("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!isSigned) {
      if (signaturePad) signaturePad.classList.add("invalid");
      setError("Please add your digital signature before submitting.");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    try {
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      payload.accepted = payload.accepted === "true";
      payload.sessionId = sessionId || "";
      payload.signatureDataUrl = signaturePad.toDataURL("image/png");

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

      const customerName = String(payload.customerName || "").trim();
      const rentalDate = String(payload.rentalDate || "").trim();
      const products = String(payload.productsRented || "").trim();

      const redirectUrl =
        "/thankyou.html?name=" +
        encodeURIComponent(customerName) +
        "&date=" +
        encodeURIComponent(rentalDate) +
        "&castle=" +
        encodeURIComponent(products);

      window.location.href = redirectUrl;
    } catch (err) {
      setError(err && err.message ? err.message : "Submission failed.");
      updateSubmitState();
      if (submitBtn) submitBtn.textContent = "Submit Waiver";
    }
  });
}

