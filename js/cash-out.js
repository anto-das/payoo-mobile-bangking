document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    let cashOutValue = getInputValueById('cash-out-value');
    let cashOutPin = getInputValueById('cash-out-pin');
    if(isNaN(cashOutValue)){
        alert('sorry something wrong');
        return;
    }
    if(cashOutPin === 1234){
        let cashOutBalance = balance('balance');
        let cashOutAmount = cashOutBalance - cashOutValue;
        document.getElementById('balance').innerText = cashOutAmount;
       if(cashOutValue > cashOutBalance){
        alert('you do not have enough money in your balance')
       }
        // cash out transaction history
        let div = document.createElement('div');
        div.innerHTML = `
        <h1 class="text-2xl font-bold">Cash Out</h1>
        <p>withdraw:${cashOutValue}Tk. and your new balance:${cashOutAmount}Tk.
        `
        div.classList.add('bg-red-400');
        document.getElementById('transaction-content').appendChild(div);
    }
    else{
        alert('please input a valid pin')
    }
})

document.getElementById('cash-out-blnc')
    .addEventListener('click', function(){
        sectionElementById('cash-out-form');
    });