// Toggle -----------------------------------------------------

const addMoneyDiv = document.getElementById("addMoneyDiv");
const sendMoneyDiv = document.getElementById("sendMoneyDiv");
const cashOutDiv = document.getElementById("cashOutDiv");
const payBillDiv = document.getElementById("payBillDiv");

const formContainer = document.querySelector(".form-container");

const btnAddMoney = document.getElementById("btnAdd");
const btnSendMoney = document.getElementById("btnSend");
const btnCashOut = document.getElementById("btnCash");
const btnPayBill = document.getElementById("btnBill");

function hideAllForms() {
  addMoneyDiv.classList.add("hidden");
  sendMoneyDiv.classList.add("hidden");
  cashOutDiv.classList.add("hidden");
  payBillDiv.classList.add("hidden");
}

function toggleForm(formDiv) {
  const isVisible = !formDiv.classList.contains("hidden");

  if (isVisible) {
    hideAllForms();
    formContainer.classList.add("hidden");
  } else {
    hideAllForms();
    formContainer.classList.remove("hidden");
    formDiv.classList.remove("hidden");
  }
}

btnAddMoney.addEventListener("click", () => toggleForm(addMoneyDiv));
btnSendMoney.addEventListener("click", () => toggleForm(sendMoneyDiv));
btnCashOut.addEventListener("click", () => toggleForm(cashOutDiv));
btnPayBill.addEventListener("click", () => toggleForm(payBillDiv));

const balance = document.getElementById("balance");

// Add Money --------------------------------------

const addMoneyForm = document.getElementById("addMoneyForm");
const accountNumberAdd = document.getElementById("accountNumberAdd");
const addAmount = document.getElementById("addAmount");
const addPin = document.getElementById("addPin");
const addAccountError = document.getElementById("addaccount-error");
const addAmountError = document.getElementById("addamount-error");
const addPinError = document.getElementById("addpin-error");

// Transaction Add money----------------------------------------------
const transactionContainer = document.getElementById("transaction-div");
const addMoneyTemplate = document.getElementById("addMoneyTemplate");
const addMoneyTransaction = document.getElementById("addMoneyTransaction");

addMoneyForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset errors and message
  addAccountError.innerText = "";
  addAmountError.innerText = "";
  addPinError.innerText = "";

  const accountNumber = accountNumberAdd.value.trim();
  const amount = parseFloat(addAmount.value.trim());
  const pin = addPin.value.trim();

  if (!/^\d+$/.test(accountNumber)) {
    addAccountError.innerText = "Enter Valid Account Number";
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    addAmountError.innerText = "Enter Valid Amount";
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    addPinError.innerText = "PIN must be exactly 4 digits";
    return;
  }

  let balan = parseFloat(balance.innerText);
  balan += amount;
  balance.innerText = balan.toFixed(2);

  const newTransaction = addMoneyTransaction.cloneNode(true);
  const dateNow = new Date().toLocaleDateString();
  newTransaction.querySelector("#addMoneyAmount").textContent = `+ $${amount}`;
  newTransaction.querySelector("#addMoneyDate").textContent = dateNow;
  newTransaction.removeAttribute("id");
  transactionContainer.prepend(newTransaction);
  addMoneyForm.reset();
});

// Send Money --------------------------------------

const sendMoneyForm = document.getElementById("sendMoneyForm");
const accountNumberSend = document.getElementById("accountNumberSend");
const sendAmount = document.getElementById("sendAmount");
const sendPin = document.getElementById("sendPin");
const sendAccountError = document.getElementById("sendaccount-error");
const sendAmountError = document.getElementById("sendamount-error");
const sendPinError = document.getElementById("sendpin-error");

// Transaction Send Money ---------------------------------------------

const sendMoneyTemplate = document.getElementById("sendMoneyTemplate");
const sendMoneyTransaction = document.getElementById("sendMoneyTransaction");

sendMoneyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  sendAccountError.innerText = "";
  sendAmountError.innerText = "";
  sendPinError.innerText = "";

  const accountNumber = accountNumberSend.value.trim();
  const amount = parseFloat(sendAmount.value.trim());
  const pin = sendPin.value.trim();

  if (!/^\d+$/.test(accountNumber)) {
    sendAccountError.innerText = "Enter Valid Account Number";
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    sendAmountError.innerText = "Not sufficient amount";
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    sendPinError.innerText = "PIN must be exactly 4 digits";
    return;
  }

  let balan = parseFloat(balance.innerText);

  if (amount > balan) {
    sendAmountError.innerText = "Insufficient balance";
    return;
  }

  balan -= amount;
  balance.innerText = balan.toFixed(2);

  const newTransaction = sendMoneyTransaction.cloneNode(true);
  const dateNow = new Date().toLocaleDateString();
  newTransaction.querySelector("#sendMoneyAmount").textContent = `- $${amount}`;
  newTransaction.querySelector("#sendMoneyDate").textContent = dateNow;
  newTransaction.removeAttribute("id");
  transactionContainer.prepend(newTransaction);
  sendMoneyForm.reset();
});

// Cashout Money --------------------------------------

const cashOutForm = document.getElementById("cashOutForm");
const cashAccountNumber = document.getElementById("cashAccountNumber");
const cashAmount = document.getElementById("cashAmount");
const cashPin = document.getElementById("cashPin");
const cashAccountError = document.getElementById("cashaccount-error");
const cashAmountError = document.getElementById("cashamount-error");
const cashPinError = document.getElementById("cashpin-error");

// Transaction CashOut ---------------------------------------------

const cashOutTemplate = document.getElementById("cashOutTemplate");
const cashOutTransaction = document.getElementById("cashOutTransaction");

cashOutForm.addEventListener("submit", function (e) {
  e.preventDefault();
  cashAccountError.innerText = "";
  cashAmountError.innerText = "";
  cashPinError.innerText = "";

  const accountNumber = cashAccountNumber.value.trim();
  const amount = parseFloat(cashAmount.value.trim());
  const pin = cashPin.value.trim();

  if (!/^\d+$/.test(accountNumber)) {
    cashAccountError.innerText = "Enter Valid Account Number";
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    cashAmountError.innerText = "Not sufficient amount";
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    cashPinError.innerText = "PIN must be exactly 4 digits";
    return;
  }

  let balan = parseFloat(balance.innerText);

  if (amount > balan) {
    cashAmountError.innerText = "Insufficient balance";
    return;
  }

  balan -= amount;
  balance.innerText = balan.toFixed(2);

  const newTransaction = cashOutTransaction.cloneNode(true);
  const dateNow = new Date().toLocaleDateString();
  newTransaction.querySelector("#cashOutAmount").textContent = `- $${amount}`;
  newTransaction.querySelector("#cashOutDate").textContent = dateNow;
  newTransaction.removeAttribute("id");
  transactionContainer.prepend(newTransaction);

  cashOutForm.reset();
});

// PayBIll Form ----------------------------------------------

const payBillForm = document.getElementById("payBillForm");
const payBillAccount = document.getElementById("payBillAccount");
const payBillAmount = document.getElementById("payBillAmount");
const payBillPin = document.getElementById("payBillPin");
const payAccountError = document.getElementById("payaccount-error");
const payAmountError = document.getElementById("payamount-error");
const payPinError = document.getElementById("paypin-error");

// Transaction Send Money ---------------------------------------------

const payBillTemplate = document.getElementById("payBillTemplate");
const payBillTransaction = document.getElementById("payBillTransaction");

payBillForm.addEventListener("submit", function (e) {
  e.preventDefault();

  payAccountError.innerText = "";
  payAmountError.innerText = "";
  payPinError.innerText = "";

  const accountNumber = payBillAccount.value.trim();
  const amount = parseFloat(payBillAmount.value.trim());
  const pin = payBillPin.value.trim();

  if (!/^\d+$/.test(accountNumber)) {
    payAccountError.innerText = "Enter Valid Account Number";
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    payAmountError.innerText = "Enter Valid Amount";
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    payPinError.innerText = "PIN must be exactly 4 digits";
    return;
  }

  let balan = parseFloat(balance.innerText);

  if (amount > balan) {
    payAmountError.innerText = "Insufficient balance";
    return;
  }

  balan -= amount;
  balance.innerText = balan.toFixed(2);

  const newTransaction = payBillTransaction.cloneNode(true);
  const dateNow = new Date().toLocaleDateString();
  newTransaction.querySelector("#payBillAmount").textContent = `- $${amount}`;
  newTransaction.querySelector("#payBillDate").textContent = dateNow;
  newTransaction.removeAttribute("id");
  transactionContainer.prepend(newTransaction);

  payBillForm.reset();
});
