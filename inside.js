// 2--------Deposit money
// 2.1----Add event on deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    
    // 2.2 -----get the deposit input value
    const depositField=document.getElementById('deposit-value');
    const depositAmountString=depositField.value;
    //2.3-------convert string to number
    const depositAmount=parseFloat(depositAmountString);
    
    //2.4-----get the preivous deposit by innertext
    const previousDeposit=document.getElementById('previous-deposit');
    // 2.5----get the preivous deposit 
    const preivousdepositAmountString=previousDeposit.innerText;
    //2.6---------convert string to number
    const preivousdepositAmount=parseFloat(preivousdepositAmountString)  
    //2.7------total deposit 
    const deposit=depositAmount+preivousdepositAmount;
    //2.8--------put the total depost to previous deposit
    previousDeposit.innerText=deposit;
    //2.9-------clear the depositField
    depositField.value='';
    //2.10------------update the balance
    const banalceField=document.getElementById('balance');
    const Totalbalance=banalceField.innerText;
    const previousBalace=parseFloat(Totalbalance);
    const newBalance=previousBalace+depositAmount;
    banalceField.innerText=newBalance;
    
})

//3--------withdraw
//3.1---------get the button and apply event listener
document.getElementById('withdraw').addEventListener('click',function(){
    // 3.2 ------get the withdraw value
    const withdrawValue=document.getElementById('withdraw-value');
    const withdrawValueString=withdrawValue.value;
    const withdraw=parseFloat(withdrawValueString);
    
    //3.3-----clear the feild
    withdrawValue.value='';
    //3.4---------get the previous withdraw
    const previousWithdraw=document.getElementById('previous-withdraw');
    const previousWithdrawString=previousWithdraw.innerText;
    const previousWithdrawValue=parseFloat(previousWithdrawString);
    //3.5-----------get the total withdraw
    const recentWithdraw=withdraw+previousWithdrawValue;
    //3.6-------set the value
    previousWithdraw.innerText=recentWithdraw;
    //3.7----------update tHE banalce
    const banalceField=document.getElementById('balance');
    const Totalbalance=banalceField.innerText;
    const previousBalace=parseFloat(Totalbalance);
    const newBalance=previousBalace-recentWithdraw;
    banalceField.innerText=newBalance;


})
