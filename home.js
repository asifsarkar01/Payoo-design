        // Add money to the account
        console.log('addeded frome home.html');
        // step-1 add an eventhandler to the AddMoney button inside the frome 
        document.getElementById('add-money')
        .addEventListener('click', function(event){
          // Prevent page reload after frome submit : page reload thamanor jonno eita
         event.preventDefault();
    // step-2 get money to be addeded the account (amount) a kotho tk dive ta dekhar jonno
             const addAmount =document.getElementById('add-amount').value;
             console.log(addAmount)
            //  step-3 get pinnumber to the console.log (pin) paowar jonno ei structure dite hobe
            const getPin =document.getElementById('get-pin').value;
            console.log(getPin);

        })
   
    
    
  
