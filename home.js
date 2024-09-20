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

            // step-4 verify pin number (pin number)sothik ache kina ta check kore console a result paowar jonno o tk balance add korar way 
            // but this is wrong way eita begginer der jonno 
            if(getPin === '1234'){
              console.log('click this pin i found this')
            //   get the current balance 
         const balance= document.getElementById('balance-stat').innerText;
         console.log(balance)

        //  step-5 add addmoney input with balance 
       const addAmountNumber = parseFloat(addAmount);
       const balanceNumber = parseFloat(balance);
       const newBalance =addAmountNumber+balanceNumber;
       console.log(newBalance);
    //  step-6  update balance uprer available balance a new balance add korar jonno available balace er id stat oita ante hobe abong inner text er por newBalace bosate hobe 
       document.getElementById('balance-stat').innerText=newBalance;
            }
            else{
                alert('Wrong pin number! try again!')
            }
        })
   
    
    
  
