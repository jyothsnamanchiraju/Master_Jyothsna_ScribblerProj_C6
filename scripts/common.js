function invokesignupmodal(num){

    if(num===1)
        document.getElementById('signinModal').setAttribute('style','display:none');

    document.getElementById('signup-btn').setAttribute('data-bs-toggle','modal');
    document.getElementById('signup-btn').setAttribute('data-bs-target','#signupModal');
    document.getElementById('signup-btn').setAttribute('data-bs-whatever','@mdo');

    var modalHeader = createModalHeader(1);
    var signupForm= createSignupForm();
    var modalFooter = createModalFooter();


    var signupModalElement =document.createElement('div');
    signupModalElement.innerHTML= modalHeader + signupForm +modalFooter;

    document.getElementsByTagName('body')[0].appendChild(signupModalElement);

}


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



function createModalHeader(num){
    var modalname;
    var title;
    if(num===1) {
        modalname = 'signupModal';
        title = 'Get Started';
    }
    else {
        modalname = 'signinModal';
        title = 'Welcome back!';
    }

    var modalHeader = '<div class=\"modal fade\" id=\"'+ modalname +'\" tabindex=\"-1\" aria-labelledby=\"getStarted\" aria-hidden=\"true\">'+
        '<div class=\"modal-dialog modal-dialog-centered\">'+
        '<div class=\"modal-dialog\">'+
        '<div class=\"modal-content\" style=\"width:120%\">'+
        '<div class=\"modal-header\">'+
        '<h3 class=\"modal-title\" id=\"header-title\" style=\"justify-content:start;\">'+title+'</h3>'+
        '<button type=\"button\"  data-bs-dismiss=\"modal\" aria-label=\"Close\">'+
        '<i class=\"fa fa-times\" aria-hidden=\"true\" ></i>'+
        '</button>'+
        '</div>';

    return modalHeader;
}


function createModalFooter(){
    var modalFooter = '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    return modalFooter;
}

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