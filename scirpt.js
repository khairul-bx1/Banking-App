const form = document.getElementById("my-form");

const inputs = {
  name: document.getElementById("name"),
  phone: document.getElementById("mobile-number"),
  account: document.getElementById("account-number"),
  password: document.getElementById("password"),
};

const errors = {
  name: document.getElementById("name-error"),
  phone: document.getElementById("number-error"),
  account: document.getElementById("accountNumber-error"),
  password: document.getElementById("password-error"),
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Name Validation
  const nameValue = inputs.name.value.trim();
  if (nameValue === "") {
    errors.name.textContent = "Name field required";
    isValid = false;
  } else if (/\d/.test(nameValue)) {
    errors.name.textContent = "Name can be letters only";
    isValid = false;
  } else {
    errors.name.textContent = "";
  }

  // Phone Number Validation
  const numValue = inputs.phone.value.trim();
  if (numValue === "") {
    errors.phone.textContent = "Number field required";
    isValid = false;
  } else if (!/^\d+$/.test(numValue)) {
    errors.phone.textContent = "Only digits allowed";
    isValid = false;
  } else if (numValue.length !== 11) {
    errors.phone.textContent = "Phone number must be 11 digits";
    isValid = false;
  } else {
    errors.phone.textContent = "";
  }

  // Account Number Validation
  const accountValue = inputs.account.value.trim();
  if (accountValue === "") {
    errors.account.textContent = "Account Number required";
    isValid = false;
  } else if (!/^\d+$/.test(accountValue)) {
    errors.account.textContent = "Only digits allowed";
    isValid = false;
  } else if (accountValue.length < 8 || accountValue.length > 16) {
    errors.account.textContent = "Account Number must be 8-16 digits";
    isValid = false;
  } else {
    errors.account.textContent = "";
  }

  // Password Validation
  const passwordValue = inputs.password.value.trim();
  if (passwordValue === "") {
    errors.password.textContent = "Password required";
    isValid = false;
  } else if (passwordValue.length < 4) {
    errors.password.textContent = "Password must be at least 4 characters";
    isValid = false;
  } else {
    errors.password.textContent = "";
  }

  if (isValid) {
    window.location.href = "dashboard.html";
  }
});
