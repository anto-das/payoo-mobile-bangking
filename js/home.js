document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    let addAmount =document.getElementById('amount-money').value;
    let pinCode =document.getElementById('add-pin').value;
    if(pinCode ==='1234'){
        let newAddAmount = parseFloat(addAmount);
        let balance = document.getElementById('balance').innerText;
        let strToBalance =parseFloat(balance);
        let newAmount = strToBalance + newAddAmount;
        document.getElementById('balance').innerText = newAmount;
    }
    else{
        alert('please enter you valid info')
    }
})
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('add-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})