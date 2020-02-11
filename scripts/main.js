var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myVarible = 'Bob';
myVarible = 'Steve';
/*
komentarz
*/
//kometarz


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/02.jpeg') {
        myImage.setAttribute ('src','images/merc2.jpeg');
    }else{
        myImage.setAttribute ('src','images/02.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Pleas enter you name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello world ' + myName + '!!!';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello world ' + storedName + '!!!';
}

myButton.onclick = function() {
    setUserName();
}