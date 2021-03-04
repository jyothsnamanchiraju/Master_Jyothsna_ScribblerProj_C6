/*arrayofposts();

function arrayofposts(){
    var arrofposts = [
        {   //p1
            username: 'Srishti Gupta',
            ptitle:'&#39;let&#39; me be a &#39;const&#39;(ant), not a &#39;var&#39;(iable)!',
            pmatter:'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
        },
        {   //p2
            username: 'Colby Fayock',
            ptitle: 'What is linting and how can it save you time?',
            pmatter: 'One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.'
        },
        {   //p3
            username: 'Yazeed Bzadough',
            ptitle:'How to Get More Views on Your Tech Blog',
            pmatter:'If you&#39;re a developer with a Twitter account, you&#39;ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.'
        },
        {   //p4
            username: 'Cedd Burge',
            ptitle:'How to write easily describable code',
            pmatter:'When code is not describable using words, most people have to do some mental mapping to turn it in to words.'+
                ' This wastes mental energy, and you run the risk of getting the mapping wrong.'+
                ' Different people will map to different words, which leads to confusion when discussing the code.'
        },
        {   //p5
            username: 'Srishti Gupta',
            ptitle:'Everything you should know about &#39;module&#39; & &#39;require&#39; in Node.js',
            pmatter:'Node.js treats each JavaScript file as a separate module.'+
                ' For instance, if you have a file containing some code and this file is named xyz.js,'+
                ' then this file is treated as a module in Node, and you can say that you&#39;ve created a module named xyz.'
        }
    ];

    //createbodyblock(username, title, matter)
    arrofposts.forEach(function (value, index){
        var pbox = generatepostbox(value.username, value.ptitle, value.pmatter);
        //  document.getElementById('body-block').innerHTML += pbox;
        var newelement = document.createElement('div');
        newelement.innerHTML= pbox;
        document.getElementById('body-block').appendChild(newelement);
    });
}

function generatepostbox(username, title, matter) {

    var postbox ='<div class = \"post-box\" >' +
        '<div class=\"username\" id=\"username\">' +
        '<p>' + username +'</p>'+
        '</div>'+
        '<div class=\"post-content\">' +
        '<div class=\"post-title-bar\">' +
        '<p class=\"title\" id=\"ptitle\">'+ title +'</p>'+
        '<button class=\"trash-btn\"> <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </button>'+
        '</div>' +
        '<div class=\"post-matter\">' +
        '<p>' + matter +'</p>'+
        '</div>' +
        '<button class=\"cont-btn\" style=\"justify-content:flex-end;\">'+
        '<i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>'+
        '</button>' +
        '</div>' +
        '</div>';

    return postbox;
} */