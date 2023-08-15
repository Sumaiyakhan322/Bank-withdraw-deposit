// step-1 :validate the password and email 

//1.1-Add event on the button
document.getElementById('submit-btn').addEventListener('click',function(){
    // 1.2--take the email and password field
    const emailField=document.getElementById('correct-email');
    const passwordField=document.getElementById('correct-password');
    
    // 1.3------get the value of email and password
    const givenEmailValue=emailField.value;
    const givenPasswordValue=passwordField.value;
    //1.4 ----validate if the password and email is correct or not 
    if(givenEmailValue==='sumu@gmail.com' && givenPasswordValue==='1234'){
        window.location.href='inside.html'
    }
    else{
        alert('Please enter the correct email and password');
    }
    // 1.5------clear the mail and password
    emailField.value='';
    passwordField.value='';
})


