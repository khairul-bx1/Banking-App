
// Toggle Button ---------------------------------------
function showForm(formDivId) {
    const forms = ["addMoneyForm", "sendMoneyForm", "cashOutDiv", "payBillDiv"];
    forms.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add("hidden");
    });
    const activeForm = document.getElementById(formDivId);
    if(activeForm) activeForm.classList.remove("hidden");
}

document.getElementById("btnAddMoney").addEventListener("click", () => showForm("addMoneyForm"));
document.getElementById("btnSendMoney").addEventListener("click", () => showForm("sendMoneyForm"));
document.getElementById("btnCashOut").addEventListener("click", () => showForm("cashOutDiv"));
document.getElementById("btnPayBill").addEventListener("click", () => showForm("payBillDiv"));





//  Add Money Button ---------------------------------------

document.getElementById('addMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bankSelect').value;
    const accounNumber = document.getElementById('accountNumber').value;
    const addAmount = parseInt(document.getElementById('addAmount').value);
    const addPin = document.getElementById('addPin').value;
    const balance = parseInt(document.getElementById('balance').innerText);
    const totalBalance = addAmount + balance;
    document.getElementById('balance').innerText = totalBalance;
})

//  Send Money Button ---------------------------------------
