$('#checkbox').click(function () {
    if(this.checked){
        $('#Password').attr('type','text');
    }else {
        $('#Password').attr('type','password');
    }
});


function checkFirstname() {
    var firstNameLength = $('#firstName').val().length;
    if(firstNameLength >=6 && firstNameLength <=15){
        $('#firstNameError').text(' ');
        return true;
    } else {
        $('#firstNameError').text('First name should be between 6 to 15 character');
        return false;
    }
};

$('#firstName').click(function () {
    checkFirstname();
});

$('#firstName').blur(function () {
    checkFirstname();
});

$('#firstName').keyup(function () {
    checkFirstname();
});

//last name function here start
function checklastname() {
    var firstNameLength = $('#lastName').val().length;
    if(firstNameLength >=6 && firstNameLength <=15){
        $('#lastNameError').text(' ');
        return true;
    } else {
        $('#lastNameError').text('First name should be between 6 to 15 character');
        return false;
    }
};

$('#lastName').click(function () {
    checklastname();
});

$('#lastName').blur(function () {
    checklastname();
});

$('#lastName').keyup(function () {
    checklastname();
});
//last name function here end

function checkGender() {
    var genderValue = $('input[type="radio"]:checkbox').val();
   if(genderValue){
       $('#genderError').text(' ');
       return true;
   }else {
       $('#genderError').text(' Please select a gender');
       return false;
   }
}
$('input[type="radio"]').blur(function(){
    checkGender();
})







//mail valid start here

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);

    if(pattern.test($('#emailAddress').val())){
        $('#emailError').text(' ');
        return true;
    } else {
        $('#emailError').text('Email address is invalid');
        return false;
    }
}

$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});


//password


function checkPassword() {
   var passwordLength = $('#Password').val().length;

   if(passwordLength >=6 ){
       $('#passwordError').text(" ");
       return true;
   }else {
       $('#passwordError').text('Password Length al least 8 character');
       return false;
   }
}
$('#Password').keyup(function () {
    checkPassword();
});
$('#Password').blur(function () {
    checkPassword();
});

//confirm password

function checkConfirmPassword() {
    var passwordConfirmLength = $('#Password').val();
    var passwordConfirmLength11 = $('#confirmPassword').val();

    if(passwordConfirmLength == passwordConfirmLength11){
        $('#confirmPasswordError').text(" ");
        return true;
    }else {
        $('#confirmPasswordError').text('Password Length al least 8 character');
        return false;
    }
};
$('#confirmPassword').keyup(function () {
    checkConfirmPassword() ;
});
$('#confirmPassword').blur(function () {
    checkConfirmPassword() ;
});


//DISTRICT NAME
function checkDistrictName() {
    var districtNameVal = $('#districtName').val();

    if(districtNameVal == ' '){
        $('#districtNameErro').text('Plese select a valid district name');
        return false;
    }else {
        $('#districtNameErro').text(' ');
        return true;
    }
};
$('#districtName').change(function () {
    checkDistrictName();
});


$('#registrationForm').submit(function () {
    if(chckFirstName()== true && checklastname() ==true && checkEmailAddress()==true && checkPassword() ==true && checkConfirmPassword()==true && checkDistrictName()==true && checkGender() ){
        return true;
    }
   else {
       return false;
    }
});