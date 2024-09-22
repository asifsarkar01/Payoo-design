console.log('My frome creation')

// step-1 login button a javascript bebohar kore console.log a result ante chaile niche structure follow korte hobe 
// document.getElementById('login-button').addEventListener('click', function(event){
//     // input a likhe dile tarpor login button a click korle output paowa jai na ta atakanor jonnno preventDafault use korte hoye niche structure function erpor element call kore kaj korte hobe
//     event.preventDefault();
    
//     // step-3 get the phone number input er vitore je phone number daowa hobe ta ami output a pete chaile id call kore value use korte hobe ==structure== id ta your phone number inputfield a nite hobe
//     const phoneNumber= document.getElementById('phone-number').value;
//     const pinNumber =document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);
// if(phoneNumber==='5'&& pinNumber==='1234'){
//     console.log('You are logged in')
//     // login page password ar number diye log in deowar por page a niye jabe tar jonno nicher structure window location follow korte hobe
//     window.location.href='/home.html'
// }
// // alert lekhar structure 
// else{
//     alert('wrong pin number')
// }
// })
document.getElementById('login-button').addEventListener('click',function (event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber= document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);
    if(phoneNumber==='7' && pinNumber==1234){
        console.log('you are logged in');
        window.location.href='./index2.html'
       }
       else{
        alert('Wrong username and password')
       } 
})
