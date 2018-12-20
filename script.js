var is_play=false;
var score;
var timevalue;
var action;
var correctans;
document.getElementById("startreset").onclick=function(){
    if(is_play == true)
        {
            location.reload();             //reload the page if we are already playing
        }
    else{
        is_play=true;
        show("time");     //show time button made earlier
        timevalue=60;
        hide("gameover");
        document.getElementById("tvalue").innerHTML=timevalue;
        document.getElementById("startreset").innerHTML="Reset Game";         //change start to reset button
        score=0;
        document.getElementById("svalue").innerHTML=score;                      //change score value;
        
        startCountDown();                                   //start counter function
        genQA();                                            //generete ques ans
   }
    
}
    for(i=1;i<5;i++){
document.getElementById("b"+i).onclick = function()
{
    if(is_play==true)
        {
            if(this.innerHTML == correctans)
                {
                    score=score+5;
                    document.getElementById("svalue").innerHTML=score;
                    hide("wrong");
                    show("correct");
                    setTimeout(function(){ hide("correct")},1000);
                    genQA();
                }
            else{
                hide("correct");
                    show("wrong");
                score=score-1;
                document.getElementById("svalue").innerHTML=score;
                    setTimeout(function(){ hide("wrong")},1000);
            }
        }
}
}
function startCountDown()
{
    action=setInterval(function(){
        timevalue=timevalue-1 ;
        document.getElementById("tvalue").innerHTML=timevalue;
        if(timevalue==0)
            {   is_play=false;
                show("gameover");
                document.getElementById("gameover").innerHTML="<p>Game over!</p><p>Your score is " +  score + "</p>";
                hide("correct");
                hide("wrong");
                hide("time");
                document.getElementById("b1").innerHTML="";
                document.getElementById("b2").innerHTML="";
                document.getElementById("b3").innerHTML="";
                document.getElementById("b4").innerHTML="";
                document.getElementById("startreset").innerHTML="Start Game";
                clearInterval(action);
            }
    },1000);
}
function genQA()
{
    var x=1+(Math.round(9*Math.random()));
     var y=1+(Math.round(9*Math.random()));
    document.getElementById("ques").innerHTML=x + "x" + y;
    correctans=x*y;
    var pos=1+(Math.round(3*Math.random()));
    document.getElementById("b"+pos).innerHTML = correctans;
    var answers=[correctans];
    for(i=1; i<5; i++)
        {
            if(i!= pos)
                {   
                    var wrongans;
                    
                    do{
                       
                        wrongans=(1+(Math.round(9*Math.random())))*(1+(Math.round(9*Math.random())));
                       
                    }while(answers.indexOf(wrongans)>-1);
                 
                 
                    document.getElementById("b"+i).innerHTML=wrongans;
                    answers.push(wrongans);
                }
        }
    
    
}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id)
{
    document.getElementById(Id).style.display="block";
}