//we need[0] when you use Class name because there are several class in HTML
document.getElementsByClassName('peach')[0].style.backgroundColor = 'tomato';


//No.7,8,9 #orange
//store myDiv(grab element)
var myDiv = document.getElementById('orange');
//create h1
var myH1 = document.createElement('h1');
//H1 is inside Div
 myDiv.appendChild(myH1);
  // give text in my H1
  myH1.textContent = 'Hello World!';

//No.10,11 #grape
//store id#grape
var grape = document.getElementById('grape');
//create H1 in div#grape, will append later
var newH1 = document.createElement('h1');
//create text to H1
var newT = document.createTextNode('Success!');
  //h1 is appended #grape
 grape.appendChild(newH1);
 //newT(text) is appended h1
 newH1.appendChild(newT);


// No,12, 13
//create class button to HMTL
var myBtn = document.createElement('button');
//create class img to HTML
var myImg = document.createElement('img');

 //create class to button created above
 myBtn.className = "btn btn-outline-info btn-lg";
 //create class to img
 myImg.className = 'img-fluid';
//create text to button created above
var t = document.createTextNode("click!");

  //append img to div(grape)
  grape.appendChild(myImg);
  //append button to div(grape)
  grape.appendChild(myBtn);
 //append text(t) to button(myBtn).Create text inside buttton
  myBtn.appendChild(t);

//create image array/object.
//we will change img by clicking btn later
var images = [
  {
  path : 'https://i.pinimg.com/originals/5b/5c/c2/5b5cc265cf4135803a46b3a210120f5b.jpg',
  desc: 'lion',
 },
 {
   path : 'https://icdn2.digitaltrends.com/image/elephant-head-on.jpg',
   desc: 'elephant'
 }
];

//create onclick function to myBtn created above
myBtn.onclick = function () {myFunction()};
// store counter as 0, we will use counter to change image
var counter = 0;

// function myFunction() {
//   myImg.src = images[0].path;
// };

//images change when you click btn.
function myFunction() {
  //countaer increases by one everytime when function run(when you click btn)
  counter++ ;
  if(counter >= images.length) {
    counter = 0;
  }
  myImg.src = images[counter].path;
  myImg.alt = images[counter].desc;
};
