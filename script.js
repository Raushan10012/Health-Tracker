console.log("Script loaded");

/* ---------- GUIDE CHARACTER ---------- */

function guideSay(message, image){

let bubble = document.getElementById("guideBubble");
let img = document.getElementById("guideImg");

if(!bubble || !img) return;

bubble.innerText = message;

if(image){
img.src = image;
}

img.classList.remove("talk");

setTimeout(()=>{
img.classList.add("talk");
},100);

}


/* ---------- PAGE SWITCHING ---------- */

function showPage(pageId,message){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){
page.classList.remove("active");
});

let page = document.getElementById(pageId);

if(page){
page.classList.add("active");
}

if(message){
guideSay(message,"assistant-normal.png");
}

}


/* ---------- NAVIGATION ---------- */

function goHome(){
showPage("home","Choose another tool.");
}

function showBMI(){
showPage("bmiPage","Let's check your BMI!");
}

function showAge(){
showPage("agePage","Tell me your birth date.");
}


/* ---------- BMI CALCULATOR ---------- */

function calculateBMI(){

let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);

if(!height || !weight){
alert("Please enter height and weight");
return;
}

height = height / 100;

let bmi = weight / (height * height);
bmi = Number(bmi.toFixed(1));

document.getElementById("bmi").innerText = "BMI : " + bmi;

let bmiValue = document.getElementById("bmiValue");
if(bmiValue) bmiValue.innerText = bmi;


/* ---------- BMI BAR ---------- */

let fill = document.getElementById("bmiFill");

if(fill){
let percent = Math.min((bmi/40)*100,100);
fill.style.width = percent + "%";
}


/* ---------- BMI CATEGORY ---------- */

let workout="";
let diet="";
let score=0;
let assistantImg="assistant-normal.png";
let assistantText="";


if(bmi < 18.5){

workout="Strength training";
diet="Milk, eggs, bananas";
score=60;
assistantImg="assistant-thin.png";
assistantText="You need more nutrition.";

}
else if(bmi < 25){

workout="Yoga, running, cycling";
diet="Balanced diet";
score=100;
assistantImg="assistant-fit.png";
assistantText="Great! Perfect BMI.";

}
else if(bmi < 30){

workout="Cardio exercises";
diet="Oats, fruits, salads";
score=75;
assistantImg="assistant-coach.png";
assistantText="Try cardio workouts.";

}
else{

workout="Walking, swimming";
diet="Low calorie foods";
score=50;
assistantImg="assistant-coach.png";
assistantText="Let's start serious training.";

}


/* ---------- SHOW RESULTS ---------- */

let workoutEl = document.getElementById("workout");
let dietEl = document.getElementById("diet");

if(workoutEl) workoutEl.innerText = workout;
if(dietEl) dietEl.innerText = diet;

let scoreEl = document.getElementById("healthScore");

if(scoreEl){
scoreEl.innerText = "Health Score: " + score + "/100";
}


/* ---------- ASSISTANT ---------- */

let img = document.getElementById("assistantImg");
let text = document.getElementById("assistantText");

if(img && text){

img.classList.remove("react");

setTimeout(()=>{
img.classList.add("react");
},100);

img.src = assistantImg;
text.innerText = assistantText;

}

}


/* ---------- AGE CALCULATOR ---------- */

let ageTimer=null;

function calculateAge(){

let dob=document.getElementById("dob").value;

if(!dob){
alert("Select your birth date");
return;
}

let birthDate=new Date(dob);

if(ageTimer){
clearInterval(ageTimer);
}

function updateAge(){

let now=new Date();
let diff=now-birthDate;

let minutes=Math.floor(diff/(1000*60));
let hours=Math.floor(diff/(1000*60*60));
let days=Math.floor(diff/(1000*60*60*24));
let years=Math.floor(days/365);

document.getElementById("ageYears").innerText="Age: "+years+" years";
document.getElementById("ageDays").innerText="Days lived: "+days;
document.getElementById("ageHours").innerText="Hours lived: "+hours;
document.getElementById("ageMinutes").innerText="Minutes lived: "+minutes;

}

updateAge();

ageTimer=setInterval(updateAge,1000);

}