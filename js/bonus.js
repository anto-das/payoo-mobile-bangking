const validCoupon =123;
const usedPin =[]; 


document.querySelector('#bouns-coupon-btn')
.addEventListener('click', function(e){
    e.preventDefault();
    let bonusValue = getInputValueById('bouns-coupon');
    if(usedPin.includes(123)){
        alert('this pin has already used');
        console.log(usedPin);
    }
    else if(bonusValue === validCoupon){
        let ownBlnc = balance('balance');
        if(ownBlnc === 0){
            alert('Please Add Some New Balance');
            return;
        }
        // adding bonus balance in main balance
        let bonus = 20/100*ownBlnc;
        let fixedBonus = parseFloat(bonus);
        let newBalance = ownBlnc + fixedBonus;
        document.getElementById('balance').innerText=newBalance;
        // transaction-history adding:
        let p = document.createElement('p');
        p.classList.add('bg-purple-300');
        p.innerHTML=`
        <h3 class ="text-2xl font-bold">Bonus Amount </h3>
        Bonus-Amount:${bonus}Tk. Totall-Balance:${newBalance}Tk. 
        `;
        document.getElementById('trans').appendChild(p);
    }
    else{
        alert('Your coupon code is invalid');
    }
})



document.querySelector('#get-bonus-btn')
.addEventListener('click',function(){
    sectionElementById('bouns-coupon-form');
})