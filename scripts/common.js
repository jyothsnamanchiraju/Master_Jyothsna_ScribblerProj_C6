//creates the header block
function createheaderblock(){

    var Hblock= '<div id=\"title-block\">' +
        '<p id=\"logo\">Scribbler <br>'+
        '<p id=\"tag-line\">Explore, Imagine, Create</p>'+
        '</div>'+
        '<div id=\"buttons-block\">'+
        '<button type=\"button\" id =\"signup-btn\" class =\"header-buttons\" onclick=\"invokesignupmodal(0)\">Sign Up</button>'+
        '<button type=\"button\" id =\"signin-btn\" class =\"header-buttons\" onclick=\"invokesigninmodal()\">Sign In</button>'+
        '</div>';

    document.getElementById('header-block').innerHTML = Hblock;
    document.getElementById('signup-btn').addEventListener("click",invokesignupmodal(0));
    document.getElementById('signin-btn').addEventListener("click",invokesigninmodal());
}

//invokes the signup modal
function invokesignupmodal(num){

//variable num === 1 indicates that the signup-modal has been invoked from the signin-modal
//The sign-n modal needs to be closed before opening the signup-modal
    if(num===1){
        document.getElementById('signinModal').setAttribute('style','display:none');
        document.getElementsByClassName('modal-backdrop fade show')[0].setAttribute('style', 'display:none');
    }


    document.getElementById('signup-btn').setAttribute('data-bs-toggle','modal');
    document.getElementById('signup-btn').setAttribute('data-bs-target','#signupModal');
    document.getElementById('signup-btn').setAttribute('data-bs-whatever','@mdo');

    var modalHeader = createModalHeader(1);
    var signupForm = createSignupForm();
    var modalFooter = createModalFooter();


    var signupModalElement =document.createElement('div');
    signupModalElement.innerHTML= modalHeader + signupForm +modalFooter;

   document.getElementsByTagName('body')[0].appendChild(signupModalElement);

}

//creates the signup-form
function createSignupForm(){

    var signupForm =   '<div class=\"modal-body\">'  +
        '<form>'+
        '<div class=\"mb-3\">'+
        '<label for=\"name\" class=\"col-form-label\">Name</label>'+
        '<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\" required>'+
        '</div>'+
        '<div class=\"mb-3\">'+
        '<label for=\"username\" class=\"col-form-label\">Username</label>'+
        '<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter your username\" required>'+
        '</div>'+
        '<div class=\"mb-3\">'+
        '<label for=\"password\" class=\"col-form-label\">Password</label>'+
        '<input type=\"password\" class=\"form-control\" id=\"password1\" placeholder=\"Enter your password\" required>'+
        '</div>'+
        '<div class=\"mb-3\">'+
        '<label for=\"password\" class=\"col-form-label\">Confirm Password</label>'+
        '<input type=\"password\" class=\"form-control\" id=\"password2\" placeholder=\"Re-enter your password\" required>'+
        '</div>'+
        '<button type=\"submit\" class=\"btn btn-primary\" style=\"background-color:green;  color:white; justify-content:center; width:100%\">Sign Up</button>'+
        '</form>'+
        '</div>';

    return signupForm;

}


//creates the header content for the modal
function createModalHeader(num){
    var modalname;
    var title;

    //num is an indicator-flag.
    //num===1, used to generate modal for Sign-up
    //else will generate modal for sign-in

    if(num===1) {
        modalname = 'signupModal';
        title = 'Get Started';
    }
    else {
        modalname = 'signinModal';
        title = 'Welcome Back!';
    }

    var modalHeader = '<div class=\"modal fade\" id=\"'+ modalname +'\" tabindex=\"-1\" aria-labelledby=\"getStarted\" aria-hidden=\"true\">'+
        '<div class=\"modal-dialog modal-dialog-centered\">'+
        '<div class=\"modal-dialog\">'+
        '<div class=\"modal-content\" style=\"width:120%\">'+
        '<div class=\"modal-header\">'+
        '<h3 class=\"modal-title\" id=\"header-title\" style=\"justify-content:start;\">'+title+'</h3>'+
        '<button id=\"close-btn\" type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\">'+
        '<i class=\"fa fa-times\" aria-hidden=\"true\" ></i>'+
        '</button>'+
        '</div>';

    return modalHeader;
}

/*
function removemod(){
  console.log("Under the remove modal method");
}*/

//creates the footer content for the modal
function createModalFooter(){
    var modalFooter = '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    return modalFooter;
}

//invokes the signin modal
function invokesigninmodal(){
    document.getElementById('signin-btn').setAttribute('data-bs-toggle','modal');
    document.getElementById('signin-btn').setAttribute('data-bs-target','#signinModal');
    document.getElementById('signin-btn').setAttribute('data-bs-whatever','@mdo');

    var modalHeader = createModalHeader(2);
    var signinForm= createSigninForm();
    var modalFooter = createModalFooter();


    var signinModalElement =document.createElement('div');
    signinModalElement.innerHTML= modalHeader + signinForm + modalFooter;

    document.getElementsByTagName('body')[0].appendChild(signinModalElement);
}


//creates the signin form
function createSigninForm(){

    var signinForm = '<div class=\"modal-body\">' +
        '<form>'+
        '<div class=\"mb-3\">'+
        '<label for=\"username\" class=\"col-form-label\">Username</label>'+
        '<input type=\"text\" class=\"form-control\" id=\"user-name\" placeholder=\"Enter your username\" required>'+
        '</div>'+
        '<div class=\"mb-3\">'+
        '<label for=\"password\" class=\"col-form-label\">Password</label>'+
        '<input type=\"password\" class=\"form-control\" id=\"pass-word\" placeholder=\"Enter your password\" required>'+
        '</div>'+
        '<button type=\"submit\" class=\"btn btn-primary\" style=\"background-color:green;  color:white; justify-content:center; width:100%\">Sign In</button>'+
        '<br>'+
        '<div style=\"padding:5px; margin: 5px \">'+
        '<span>Not a member?'+
        '</span>'+
        '<a href=\"\"  onclick=\"invokesignupmodal(1)\" data-bs-toggle=\"modal\" data-bs-target=\"#signupModal\" data-bs-whatever=\"@mdo\">  Sign Up  </a>'+
        '</div>'+
        '</form>'+
        '</div>';

    return signinForm;

}