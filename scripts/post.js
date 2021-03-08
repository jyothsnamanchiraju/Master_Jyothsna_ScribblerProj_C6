var pcontent = localStorage.getItem("postcontent");
// The elements of  postcontent should be seperated by " :$% " to retrieve the values of pid, username, title and matter
// " :$% "
var pid ;
var usrname;
var psttitle;
var pstmatter;
var likecount = 0;
var likebtntagline= '';
var commentsarray = [];

retrieverpostcontent();

function retrieverpostcontent(){

    var c = pcontent.split(" :$% ");
    pid = c[0];
    usrname= c[1];
    psttitle= c[2];
    pstmatter = c[3];

}

//displayPostContent();
function displayPostContent(){
    generatepostcontent(0);

}
//generates post content
function generatepostcontent(num){

    var bodycontent= '<div id=\"parea\">'+
                     '<div>'+
                        '<h2 id=\"post-title\">' + psttitle + '</h2>' +
                        '<textarea class=\"edit-post-content\" value=\"\">'+
                        psttitle +
                        '</textarea>' +
                    '</div>' +
                    '<div id=\"user-edit-btn\">' +
                        '<h5>'+ usrname +'</h5>' +
                        '<button id=\"edit-btn\" type=\"button\" onclick=\"editpostmatter()\">'+
                              'Edit <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>'+
                        '</button>'+
                        '<button id=\"save-btn\" type=\"button\" onclick=\"savepostmatter()\">'+
                        'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>'+
                        '</button>'+
                    '</div>' +
                    '<div id=\"post-content\">' +
                        '<textarea class=\"edit-post-content\">'+ pstmatter +'</textarea>' +
                        '<p id=\"post-content-block\" style=\"word-break: break-all;\">'+ pstmatter +'</p>' +
                    '</div>'+
                    '</div>';

var liketxt= 'Like';
var likesection=   '<div style=\"display:flex; flex-direction:column; align-items:flex-start;\">'+
                            '<button type=\"button\" id=\"like-btn\" onclick=\"updatelikes()\">'+
                            '<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>'+ liketxt +' </button>'+
                            '<p id=\"like-btn-tag-line\">'+ likecount+" "+likebtntagline +'</p>'+
                            '<textarea type=\"text\" rows=3 cols=150 id=\"comment-txt\" placeholder=\"Leave a comment...\">'+
                            '</textarea>'+
                            '<button type=\"button\" id=\"comment-btn\" onclick=\"addcomments()\">'+
                            'Comment</button>'+
                            '<h6>All Comments</h6>'+
                            '<div id=\"comment-list\">'+
                            '</div>'+
                    '</div>';

    if(num===0)
        document.getElementById('post-body-block').innerHTML = bodycontent + likesection;
    else
        document.getElementById('parea').innerHTML = bodycontent;
}

//below function is  called when the edit button is pressed
function editpostmatter(){

    document.getElementsByClassName('edit-post-content')[0].setAttribute('style','display:block');
    document.getElementsByClassName('edit-post-content')[1].setAttribute('style','display:block');
    document.getElementById('save-btn').setAttribute('style','display:block');

    document.getElementById('post-title').setAttribute('style','display:none');
    document.getElementById('edit-btn').setAttribute('style','display:none');
    document.getElementById('post-content-block').setAttribute('style','display:none');
}

//below function is called when the save button is pressed
function savepostmatter(){

    var editedtitle = document.getElementsByClassName('edit-post-content')[0].value;

    var editedmatter = document.getElementsByClassName('edit-post-content')[1].value;

    psttitle =  editedtitle;
    pstmatter = editedmatter;


    document.getElementsByClassName('edit-post-content')[0].setAttribute('style','display:none');
    document.getElementsByClassName('edit-post-content')[1].setAttribute('style','display:none');
    document.getElementById('save-btn').setAttribute('style','display:none');

    document.getElementById('post-title').setAttribute('style','display:block');
    document.getElementById('edit-btn').setAttribute('style','display:block');
    document.getElementById('post-content-block').setAttribute('style','display:block');

    generatepostcontent(1);
}

//below function is calle dwhen the like button is pressed.
function updatelikes(){
    likecount = likecount+1;

    if (likecount ==1)
        likebtntagline= 'person likes this!';
    else
        likebtntagline= 'persons like this!';

   document.getElementById('like-btn').innerHTML =  '<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>'+ 'Liked' +' </button>';

    document.getElementById('like-btn-tag-line').innerHTML = likecount+" "+likebtntagline;
}

//below function is called when the user adds comments.
function addcomments(){
    document.getElementById('comment-list').innerHTML = '';

    var commenttxt = document.getElementById('comment-txt').value;
    commentsarray.push(commenttxt);

    for (var i = commentsarray.length-1; i>=0;  i--){
        var ctext = '<p class=\"comment-box\">'+ commentsarray[i] +'</p>';
        document.getElementById('comment-list').innerHTML += ctext;
    }

    document.getElementById('comment-txt').value='';
}
