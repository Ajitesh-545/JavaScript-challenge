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