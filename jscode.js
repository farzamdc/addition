var playing = false;
var score;
var action;
var timeremaining = 60;
var rightAnswer;

document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        hide("gameover");
        document.getElementById("scorevalue").innerHTML = score;
        show("timeleft");
            document.getElementById("timeleftvalue").innerHTML = timeremaining;
        
            timeremaining=60;
        document.getElementById("startreset").innerHTML = "RESET";
        
        startCountdown();
        generateQA();
    }
    for(i=1;i<5;i++){
        document.getElementById("box" + i).onclick = function(){
            if(playing == true){
                if(this.innerHTML == rightAnswer){
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    
                    hide("wrong");
                    show("right");
                    setTimeout(function(){
                        hide("right");
                    },1000);
                    generateQA();
                    }else{
                        hide("right");
                        show("wrong");
                        setTimeout(function(){
                            hide("wrong")
                        },500);
                    }
                    
                }
            }
            
        }
    
    
    
    
    
    }
    //functions after clicking start/reset button
    function startCountdown(){
        action = setInterval(function(){
            timeremaining -= 1
            document.getElementById("timeleftvalue").innerHTML = timeremaining;
        
            if(timeremaining == 0){
            
            stopCountdown();
            show("gameover")
         
            document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p><p>Your Score : "+ score +" </p>"
            
            hide("timeleft");
            hide("right");
            hide("wrong");
            playing = false;
            
            document.getElementById("startreset").innerHTML = "START";
            }
            
        },1000)
    }
    function stopCountdown(){
            clearInterval(action);
    }
    function hide(Id){
        document.getElementById(Id).style.display = "none";
    }
    function show(Id){
        document.getElementById(Id).style.display = "block";
    }
    function generateQA(){
        var x = 1+Math.round(9*Math.random());
        var y = 1+Math.round(9*Math.random());
            rightAnswer = x * y;
        document.getElementById("question").innerHTML = x +" x "+ y;
        
        var rightPosition = 1+Math.round(3*Math.random());
        document.getElementById("box" + rightPosition).innerHTML = rightAnswer;
        
        var answers = [rightAnswer];
        
        for(i=1;i<5;i++){
            if(i != rightPosition){
                var wrongAnswer;
                do{
                wrongAnswer =(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));                    
                }
                while(answers.indexOf(wrongAnswer)>-1);      
                document.getElementById("box" + i).innerHTML = wrongAnswer;
                answers.push(wrongAnswer);
            }
        
        }
        
        
    }












