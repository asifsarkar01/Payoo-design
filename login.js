console.log('My frome creation')

// step-1 login button a javascript bebohar kore console.log a result ante chaile niche structure follow korte hobe 
document.getElementById('login-button').addEventListener('click', function(event){
    // input a likhe dile tarpor login button a click korle output paowa jai na ta atakanor jonnno preventDafault use korte hoye niche structure function erpor element call kore kaj korte hobe
    event.preventDefault();
    console.log('clicking this button i will be see everythig')
    // step-3 get the phone number input er vitore je phone number daowa hobe ta ami output a pete chaile id call kore value use korte hobe ==structure== id ta your phone number inputfield a nite hobe
    const phoneNumber= document.getElementById('phone-number').value;
    console.log(phoneNumber);
})