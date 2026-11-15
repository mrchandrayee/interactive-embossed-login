const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const statusMsg = document.getElementById("statusMsg");
const createAccount = document.getElementById("createAccount");
const toast = document.getElementById("toast");

function showStatus(message, type = "error") {
  statusMsg.textContent = message;
  statusMsg.className = `msg ${type}`;
}
function clearStatus() {
  statusMsg.textContent = "";
  statusMsg.className = "msg";
}
[emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", clearStatus);
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showStatus("Please enter your email address and password.");
    return;
  }
  if (!emailInput.checkValidity()) {
    showStatus("Please enter a valid email address.");
    emailInput.focus();
    return;
  }
  if (password.length < 6) {
    showStatus("Password must be at least 6 characters.");
    passwordInput.focus();
    return;
  }
  showStatus("Login successful! Redirecting...", "success");
});

createAccount.addEventListener("click", () => {
  toast.textContent = "Create Account flow is a demo placeholder.";
  toast.classList.add("show");
  clearTimeout(createAccount.timer);
  createAccount.timer = setTimeout(() => toast.classList.remove("show"), 2200);
});
