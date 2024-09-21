
document.querySelector('#transfer-money-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    let transferAmount = getInputValueById('transfer-money-value');
    let transferPin = getInputValueById('transfer-money-pin');
    if(isNaN(transferAmount)){
        alert('please input a valid number');
        return;
    }
    if(transferPin === 1234){
        let transBalance = balance('balance');
        let newBalance = transBalance - transferAmount;
        if(transferAmount > transBalance){
            alert('please check your balance');
            return;
        }

        document.getElementById('balance').innerText = newBalance;
        // dynamic createElement:
        let p =document.createElement('p');
        p.classList.add('bg-red-300');
        p.innerHTML =`
        <h3 class="text-2xl font-bold">Transfer Money</h3>
        Transfer-Amount:${transferAmount}Tk.Totall-Balance:${newBalance}Tk.
        `;
        let apend = document.getElementById('trans');
        apend.appendChild(p);

    }
    else{
        alert('please input your own pin');
    }
})



document.getElementById('transfer-money').addEventListener('click',function(){
    sectionElementById('transfer-money-form');
})