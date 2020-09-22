//challenge 1: Your age in days
    function ageInDays(){
        var age=prompt("What is your age");
        var days=(age)*365;
        var h1=document.createElement("h1");
        var textanswer=document.createTextNode("You are "+days+" days");
        h1.setAttribute('id','ageInDays');
        h1.appendChild(textanswer);
        document.getElementById("flex-box-result").appendChild(h1)
    }  
function reset(){
    document.getElementById("ageInDays").remove();
}


//Challenge 2: cat generator
function generate(){
    var image=document.createElement('img');
    var div=document.getElementById("flex-cat-gen");
    image.src="https://placekitten.com/g/200/300";
    div.appendChild(image);
}

//Challenge 3: Rock Paper scissors
 function rpsgame(YourChoice){
     var humanChoice, botChoice;
     
     botChoice=NumberTochoice(randomNumber());
     
     humanChoice=YourChoice.id;
      
      result=rpsWinner(humanChoice,botChoice);
      
      message=finalresult(result);
      
      rpsfrontend(humanChoice,botChoice,message);
 }

 function randomNumber(){
     return Math.floor(Math.random()*3);
 }

 function NumberTochoice(number){
     return ["rock","paper","scissors"][number];
 }

 function rpsWinner(human,bot){
     var rpsDatabase={
         "rock":{"scissors":1, "rock":0.5, "paper":0},
         "paper":{"scissors":0, "rock":1, "paper":0.5},
         "scissors":{"scissors":0.5, "rock":0, "paper":1}
     }
     var humanscore=rpsDatabase[human][bot];
     var botscore=rpsDatabase[bot][human];
     
     return [humanscore,botscore]
     

 }  
 function finalresult([you,bot]){
     if(you===1){
         return {'message': 'You Win!', 'color': 'green'}
     }
     else if(you===0.5){
         return {'message': 'You tied', 'color': 'yellow'}
     }
     else{
         return {'message':'You Lost', 'color': 'red'}
     }
 }

 function rpsfrontend(human,bot,msg){
    imageDatebase={
        "rock": document.getElementById("rock").src,
         "paper": document.getElementById("paper").src,
         "scissors": document.getElementById("scissors").src
    }
    document.getElementById("rock").remove();
    document.getElementById("scissors").remove();
    document.getElementById("paper").remove();


    var humandiv=document.createElement('div');
    var msgdiv=document.createElement('div');
    var botdiv=document.createElement('div');


    humandiv.innerHTML="<img src='"+ imageDatebase[human] +"' height=150 width=150 style='box-shadow: 5px 10px 50px #4910ce;'>";
    msgdiv.innerHTML="<h1 style='color:"+msg['color']+"; font-size:60px; padding:30px;'>"+msg['message']+"</h1>";
    botdiv.innerHTML="<img src='"+ imageDatebase[bot] +"' height=150 width=150 style='box-shadow: 5px 10px 50px  #000000;'>";


    document.getElementById("flex-box-rps-div").appendChild(humandiv);
    document.getElementById("flex-box-rps-div").appendChild(msgdiv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
 }

 // Challenge 4: Change all colors of the button 

 var allbutton=document.getElementsByTagName('button');
  
 var copyAllButton=[];

 for(let i=0;i<allbutton.length;i++){
     copyAllButton.push(allbutton[i].classList[1]);
 }

 function buttonColorChange(choice){
     if(choice.value === "red"){
         redbutton();
     }
     else if(choice.value === "green"){
        greenbotton();
     }
     else if(choice.value === "reset"){
         resetbutton();
     }
     else if(choice.value ==="random"){
         randombutton();
     }

 }

 function redbutton(){
     for(let i=0;i<allbutton.length;i++){
         allbutton[i].classList.remove(allbutton[i].classList[1]);
         allbutton[i].classList.add("btn-danger");
     }
 }

 function greenbotton(){
     for(let i=0; i<allbutton.length;i++){
         allbutton[i].classList.remove(allbutton[i].classList[1]);
         allbutton[i].classList.add("btn-success");
     }
 }
 function resetbutton(){
     for(let i=0;i<allbutton.length;i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyAllButton[i]);
     }
 }

function randombutton(){
    var ch=["btn-success","btn-warning","btn-danger","btn-primary"];
  
    for(let i=0;i<allbutton.length;i++){
        let randomIndex=Math.floor(Math.random()*4);
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(ch[randomIndex]);
     }
 }
