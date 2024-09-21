function getInputValueById(id){
    let addAmount =document.getElementById(id).value;
    let addNumber = parseFloat(addAmount);
    return addNumber;
}
function balance(id){
    let balance = document.getElementById(id).innerText;
    let balanceNumber = parseFloat(balance);;
    return balanceNumber;
}
function sectionElementById(id){
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('trans').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('bouns-coupon-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}