document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    let addValue = getInputValueById('amount-money');
    let addPin = getInputValueById('add-pin');
    if(isNaN(addValue)){
        alert('please input a valid data');
        return;
    }
    if(addPin === 1234){
       let accountBalance = balance('balance');
       let addAmount = accountBalance + addValue;
       document.getElementById('balance').innerText = addAmount;
    //    add transaction history
    let p = document.createElement('p');
    p.classList.add('bg-green-400');
    p.innerHTML=`
    <h3 class="text-2xl font-bold">Cash In</h3>
   your add money: ${addValue}Tk. Totall-Balance: ${addAmount}Tk.
    `;
    let history = document.getElementById('transaction-content');
    history.appendChild(p);
    }
    else{
        alert('please input your valid pin');
    }
})

document.getElementById('add-money-btn')
    .addEventListener('click', function(){
        sectionElementById('add-form');
    })