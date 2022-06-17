function getInput(inputValue) {
    const inputField = document.getElementById(inputValue);
    const previousInputField = inputField.value;
    const currentInputField = parseFloat(previousInputField);
    inputField.value = '';
    return currentInputField;
}

function updateTotalField(totalFieldId, currentInputField) {
    const setField = document.getElementById(totalFieldId);
    const previousSetField = setField.innerText;
    const currentSetField = parseFloat(previousSetField);
    setField.innerText = currentInputField + currentSetField;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal);
    return currentBalanceTotal;
}

function updateBalance(currentInputField, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal);
    if (isAdd == true) {
        balanceTotal.innerText = currentBalanceTotal + currentInputField;
    }
    else {
        balanceTotal.innerText = currentBalanceTotal - currentInputField;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get input field
    /* const inputField = document.getElementById('deposit-input');
    const previousInputField = inputField.value;
    const currentInputField = parseFloat(previousInputField); */
    const depositAmount = getInput('deposit-input');

    //get total field
    /* const setField = document.getElementById('deposit-total');
    const previousSetField = setField.innerText;
    const currentSetField = parseFloat(previousSetField);
    setField.innerText = currentInputField + currentSetField; */
    // inputField.value = '';


    //update balance field
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal);
    balanceTotal.innerText = currentBalanceTotal + currentInputField; */

    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true)
    }



});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    /* const withdrawInputField = document.getElementById('withdraw-input');
    const previousiWithdrawInputField = withdrawInputField.value;
    const currentWithdrawInputField = parseFloat(previousiWithdrawInputField); */
    const withdrawAmount = getInput('withdraw-input');

    /* const setField = document.getElementById('withdraw-total');
    const previousSetField = setField.innerText;
    const currentSetField = parseFloat(previousSetField);
    setField.innerText = currentWithdrawInputField + currentSetField; */



    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal);
    balanceTotal.innerText = currentBalanceTotal - withdrawAmount; */

    const lastBalance = getCurrentBalance();
    if (withdrawAmount > 0 && lastBalance > withdrawAmount) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > lastBalance) {
        alert('You can not withdraw. Because your withdraw amount is more than Balance amount');

    }



})

function doubleIt(n) {
    const result = n * 2;
    return result
}
const first = doubleIt(5);
const second = doubleIt(7);
