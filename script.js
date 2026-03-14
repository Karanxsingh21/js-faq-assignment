class QAItem{

constructor(question,answer){
this.question=question;
this.answer=answer;
}

render(){

const item=document.createElement("div");
item.classList.add("qa-item");

const questionDiv=document.createElement("div");
questionDiv.classList.add("question");

const text=document.createElement("span");
text.textContent=this.question;

const icon=document.createElement("i");
icon.classList.add("fa-solid","fa-chevron-down","icon");

questionDiv.appendChild(text);
questionDiv.appendChild(icon);

const answerDiv=document.createElement("div");
answerDiv.classList.add("answer");
answerDiv.textContent=this.answer;

questionDiv.addEventListener("click",()=>{

document.querySelectorAll(".qa-item").forEach(el=>{
if(el!==item){
el.classList.remove("active");
}
});

item.classList.toggle("active");

});

item.appendChild(questionDiv);
item.appendChild(answerDiv);

return item;

}

}

const qaList=[
new QAItem("What is JavaScript?","JavaScript is a programming language used to make websites interactive."),
new QAItem("What is Object-Oriented Programming?","OOP is a programming paradigm where code is organized using objects and classes."),
new QAItem("What is an Event Listener?","It waits for user actions like clicks, scrolls, or keyboard input."),
new QAItem("Why use FAQ toggles?","They keep web pages clean and improve user experience.")
];

const container=document.getElementById("faq-container");

qaList.forEach(item=>{
container.appendChild(item.render());
});
