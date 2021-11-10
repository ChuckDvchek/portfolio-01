//clear all items that are supposed to be hidden on load
hideWork();

//clicking outside of work sets page back to how it is on load
var body = document.querySelector('#body');
body.addEventListener('click',function(event){
    event.stopPropagation();
    hideWork();
});

//clicking on work one expands it
var work1Div = document.querySelector('#work-1-div')
work1Div.addEventListener('click',function(event){
    event.stopPropagation();
    displayWork(1);
});

//clicking on work two expands it
var work2Div = document.querySelector('#work-2-div')
work2Div.addEventListener('click',function(event){
    event.stopPropagation();
    displayWork(2);
});

//clicking on work three expands it
var work3Div = document.querySelector('#work-3-div')
work3Div.addEventListener('click',function(event){
    event.stopPropagation();
    displayWork(3);
});

//clicking on work four expands it
var work4Div = document.querySelector('#work-4-div')
work4Div.addEventListener('click',function(event){
    event.stopPropagation();
    displayWork(4);
});

//clicking on work five expands it
var work5Div = document.querySelector('#work-5-div')
work5Div.addEventListener('click',function(event){
    event.stopPropagation();
    displayWork(5);
});

//adds functionality to work one's buttons
var w1SiteBtn = document.querySelector('#w1-site-btn');
w1SiteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://letsplaychessproj2.herokuapp.com/";
});

var w1GitBtn = document.querySelector('#w1-github-btn');
w1GitBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://github.com/ChuckDvchek/chess-project-2";
});

//adds functionality to work two's buttons
var w2SiteBtn = document.querySelector('#w2-site-btn');
w2SiteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://chuckdvchek.github.io/password-generator/";
});

var w2GitBtn = document.querySelector('#w2-github-btn');
w2GitBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://github.com/ChuckDvchek/password-generator";
});

//adds functionality to work three's buttons
var w3SiteBtn = document.querySelector('#w3-site-btn');
w3SiteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://chuckdvchek.github.io/code-quiz/";
});

var w3GitBtn = document.querySelector('#w3-github-btn');
w3GitBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://github.com/ChuckDvchek/code-quiz";
});

//adds functionality to work four's buttons
var w4SiteBtn = document.querySelector('#w4-site-btn');
w4SiteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://chuckdvchek.github.io/thirsty-thursdays/";
});

var w4GitBtn = document.querySelector('#w4-github-btn');
w4GitBtn.addEventListener('click',function(event){
    event.stopPropagation();
    window.location.href="https://github.com/ChuckDvchek/thirsty-thursdays";
});

//adds functionality to work five's buttons
var w5SiteBtn = document.querySelector('#w5-site-btn');
w5SiteBtn.addEventListener('click',function(event){
    event.stopPropagation();
    //window.location.href="https://chuckdvchek.github.io/thirsty-thursdays/";
});

var w5GitBtn = document.querySelector('#w5-github-btn');
w5GitBtn.addEventListener('click',function(event){
    event.stopPropagation();
    //window.location.href="https://github.com/ChuckDvchek/thirsty-thursdays";
});

//display work function (work parameter is what piece of work you want to display)
function displayWork(work){
    hideWork();
    var workAtt = document.querySelector('#w'+work+'-att');
    workAtt.setAttribute('style','display:inline-block;');
    var workBtns = document.querySelector('#w'+work+'-btns');
    workBtns.setAttribute('style','display:inline;');
}

//hide work function hides all work
function hideWork(){
    var workAttributeEls = document.querySelectorAll('.work-attribute');
    var workDivBtnsEls = document.querySelectorAll('.work-div-btns');

    for (let i = 0; i < workAttributeEls.length; i++) {
        workAttributeEls[i].setAttribute('style','display:none;');
        workDivBtnsEls[i].setAttribute('style','display:none;')
    }
}