document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    let cashOutAmount =document.getElementById('cash-out-value').value;
    let cashOutpinCode =document.getElementById('cash-out-pin').value;
    if(cashOutpinCode ==='1234'){
        let newOutAmount = parseFloat(cashOutAmount);
        let Outbalance = document.getElementById('balance').innerText;
        let strToOutBalance =parseFloat(Outbalance);
        let newCashOutAmount = strToOutBalance - newOutAmount;
        document.getElementById('balance').innerText =  newCashOutAmount;
    }
    else{
        alert('please enter you valid info')
    }
})

document.getElementById('cash-out-blnc').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-form').classList.add('hidden');
})