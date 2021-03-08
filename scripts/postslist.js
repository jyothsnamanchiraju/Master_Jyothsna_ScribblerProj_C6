
//The given posts are stored as elements of an array
var arrofposts = [
    {   //p1
        uid:'p1',
        username: 'Srishti Gupta',
        ptitle:'&#39;let&#39; me be a &#39;const&#39;(ant), not a &#39;var&#39;(iable)!',
        pmatter:'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
    },
    {   //p2
        uid:'p2',
        username: 'Colby Fayock',
        ptitle: 'What is linting and how can it save you time?',
        pmatter: 'One of the biggest challenges in software development is time. It&#39;s something we can&#39;t easily get more of, but linting can help us make the most out of the time we have.'
    },
    {   //p3
        uid:'p3',
        username: 'Yazeed Bzadough',
        ptitle:'How to Get More Views on Your Tech Blog',
        pmatter:'If you&#39;re a developer with a Twitter account, you&#39;ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.'
    },
    {   //p4
        uid:'p4',
        username: 'Cedd Burge',
        ptitle:'How to write easily describable code',
        pmatter:'When code is not describable using words, most people have to do some mental mapping to turn it in to words.'+
            ' This wastes mental energy, and you run the risk of getting the mapping wrong.'+
            ' Different people will map to different words, which leads to confusion when discussing the code.'
    },
    {   //p5
        uid:'p5',
        username: 'Srishti Gupta',
        ptitle:'Everything you should know about &#39;module&#39; & &#39;require&#39; in Node.js',
        pmatter:'Node.js treats each JavaScript file as a separate module.'+
            ' For instance, if you have a file containing some code and this file is named xyz.js,'+
            ' then this file is treated as a module in Node, and you can say that you&#39;ve created a module named xyz.'
    }
];

var deluid = ''; //variable carries the id of post to be deleted

//below function generates body-block
function generatebodyblock() {
    loadpostboxes();

    arrofposts.forEach(function(value,index){
        pboxEvent(value.uid);
    });
}

//creates a post-box for each post-element that is stored in the array.
function loadpostboxes(){

    arrofposts.forEach(function (value, index){
        var pbox = generatepostbox(value.uid, value.username, value.ptitle, value.pmatter);
        document.getElementById('body-block').innerHTML += pbox;
    });
}

//generating the post-box
function generatepostbox(uid, username, title, matter) {
    var pboxid = uid;

    var postbox ='<div class = \"post-box\" id=\"'+uid+'\">' +
        '<div class=\"username\" id=\"username\">' +
        '<p>' + username +'</p>'+
        '</div>'+
        '<div class=\"post-content\">' +
        '<div class=\"post-title-bar\">' +
        '<p class=\"title\" id=\"ptitle\">'+ title +'</p>'+
        '<button type=\"button\" id=\"'+uid+'\" onclick=\"dsplmodal(&#39;'+pboxid+'&#39;)\"  class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmdelmodal\" data-bs-whatever=\"@mdo\">'+
        '<i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"width:10%;justify-content:center;\"></i>'+
        '</button>'+
        '</div>' +
        '<div class=\"post-matter\">' +
        '<p>' + matter +'</p>'+
        '</div>' +
        '<a onclick=\"updateLocalStorage(&#39;'+uid+'&#39;)\" href=\"post.html\">'+
        '<button class=\"cont-btn\" style=\"justify-content:flex-end;\">'+
        '<i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>'+
        '</button>' +
        '</a>' +
        '</div>' +
        '</div>';

    return postbox;
}

// highlighting the post-box when the mouse pointer hovers
function pboxEvent(uid){
    document.getElementById(uid).addEventListener('mouseover', function(){
        document.getElementById(uid).setAttribute('style',' box-shadow: 5px 5px 20px 5px blue; cursor: pointer');
    });

    document.getElementById(uid).addEventListener('mouseout', function() {
        document.getElementById(uid).setAttribute('style', ' box-shadow: 5px 5px 20px 5px #E4ADB2;');
    });
}

/*
function genModalDelete() {
document.getElementById('deleteconfirmation').setAttribute('style','display:block');
}*/

//deleteing the post from the screen.
function deletepost(){
    document.getElementById(deluid).setAttribute('style','display:none');
}

//below method is invoked when the tras-button on post-box is clicked
//setting the id of the post-box to be deleted.
function dsplmodal(uid){
    deluid = uid;
}

//below function is called when the post is clicked for more details.
//the details of the post are stored in the localStorage which will then be retrieved by
//the code in post.js
function updateLocalStorage(uid1){
    var pcontent;

    arrofposts.forEach(function (value, index) {
        if(uid1 === value.uid) {
            pcontent = value.uid + " :$% " + value.username + " :$% " + value.ptitle + " :$% " + value.pmatter;
            console.log("inside for loop "+pcontent);
        }
    });

    localStorage.setItem("postcontent", pcontent);
}
