// 2--------Deposit money
// 2.1----Add event on deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    // 2.2 -----get the deposit input value
    const depositField=document.getElementById('deposit-value');
    const depositAmountString=depositField.value;
    //2.3-------convert string to number
    const depositAmount=parseFloat(depositAmountString)
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