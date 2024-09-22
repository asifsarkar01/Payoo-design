        // Add money to the account
        console.log('addeded frome home.html');
        // step-1 add an eventhandler to the AddMoney button inside the frome 
    //     document.getElementById('add-money')
    //     .addEventListener('click', function(event){
    //       // Prevent page reload after frome submit : page reload thamanor jonno eita
    //      event.preventDefault();
    // // step-2 get money to be addeded the account (amount) a kotho tk dive ta dekhar jonno
    //          const addAmount =document.getElementById('add-amount').value;
    //          console.log(addAmount)
    //         //  step-3 get pinnumber to the console.log (pin) paowar jonno ei structure dite hobe
    //         const getPin =document.getElementById('get-pin').value;
    //         console.log(getPin);

    //         // step-4 verify pin number (pin number)sothik ache kina ta check kore console a result paowar jonno o tk balance add korar way 
    //         // but this is wrong way eita begginer der jonno 
    //         if(getPin === '1234'){
    //           console.log('click this pin i found this')
    //         //   get the current balance 
    //      const balance= document.getElementById('balance-stat').innerText;
    //      console.log(balance)

    //     //  step-5 add addmoney input with balance 
    //    const addAmountNumber = parseFloat(addAmount);
    //    const balanceNumber = parseFloat(balance);
    //    const newBalance =addAmountNumber+balanceNumber;
    //    console.log(newBalance);
    // //  step-6  update balance uprer available balance a new balance add korar jonno available balace er id stat oita ante hobe abong inner text er por newBalace bosate hobe 
    //    document.getElementById('balance-stat').innerText=newBalance;
    //         }
    //         else{
    //             alert('Wrong pin number! try again!')
    //         }
    //     })
   
    
  
  document.getElementById('add-money')
      .addEventListener('click',
         function(event){
    event.preventDefault();

    const addAmount =document.getElementById('add-amount').value;
    console.log(addAmount);

    const getPin =document.getElementById('get-pin').value;
    console.log(getPin);

    if(getPin === '2345'){
        console.log('add')

        const balance = document.getElementById('balance-stat').innerText;
        console.log(balance);

        const newAmountNumber =parseFloat(addAmount);
        const balanceNumber =parseFloat(balance);
        const newBalance =newAmountNumber+balanceNumber;
        console.log(newBalance);
        document.getElementById('balance-stat').innerText=newBalance;
    }
    else{
        alert('Wrong pin! Try again!')
    }
         }
      )

// Cashout option creat here add money er mothoi same 
        document.getElementById('out-money')
        .addEventListener('click', function (event){
             event.preventDefault();
             const cashOut= document.getElementById('cash-out-amount').value;
             const outPin = document.getElementById('get-out-pin').value;
             console.log(cashOut,outPin);
             if(outPin === '1234'){
                console.log('cashout pin clicked')
                const balanceNumber = document.getElementById('balance-stat').innerText;
                console.log(balanceNumber);
                const newOut =parseFloat(cashOut);
                const balanceOut =parseFloat(balanceNumber);
                const newBalance=balanceOut-newOut;
                console.log(newBalance);
                document.getElementById('balance-stat').innerText=newBalance;
             }
        })

        // show add money form hide the cashOut form classslist.remove('')likhte hobe
        document.getElementById('btn-show-add-money').addEventListener('click',
            function(){
                document.getElementById('add-money-form').classList.remove('hidden');
                document.getElementById('cash-out-form').classList.add('hidden');
            }
        )

        // show cashout button hide add money classlist.add('') dite hobe
        document.getElementById('btn-show-cash-out').addEventListener('click',
            function(){
                document.getElementById('cash-out-form').classList.remove('hidden');
                document.getElementById('add-money-form').classList.add('hidden');
            }
        )