let result1= "soldier";
let result2= "peot"; 
let result3= "king";

let submitButton = document.querySelector(".submit");
let result1Div= document.querySelector(".result1");

submitButton.onclick= function(){
	result1Div.innerHTML= "You are a" +" "+ result1; 
};
