
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
   let phoneNumber = document.getElementById('phone-number').value;
   let pinNumber = document.getElementById('pin-code').value;
   if(pinNumber ==='1234' && phoneNumber ==='1234'){
    window.location.href='./home.html';
   }
   else{
    alert('please add valid informantion');
   }
})