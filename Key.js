var drumno = document.querySelectorAll(".drum").length;
for(var i = 0; i<drumno; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerhtml = this.innerHTML;
        buttonanimation(buttonInnerhtml);
        makesound(buttonInnerhtml);
    });
}

document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimation(event.key);
});

function buttonanimation(currentkey){
       var activebutton = document.querySelector("." + currentkey);
       activebutton.classList.add("pressed");
       setTimeout(function(){
          activebutton.classList.remove("pressed");
       },100);
}

function makesound(key){

    switch(key){

        case "a":
            var tone1 = new Audio("A.wav");
            tone1.play();
            break;
        
        case "b":
            var tone2 = new Audio("B.wav");
            tone2.play();
            break; 

        case "c":
            var tone3 = new Audio("C.wav");
            tone3.play();
            break;

        case "d":
            var tone4 = new Audio("D.wav");
            tone4.play();
            break; 
        
        case "e":
            var tone5 = new Audio("E.wav");
            tone5.play();
            break;
            
        case "f":
            var tone6 = new Audio("F.wav");
            tone6.play();
            break; 
            
        case "g":
            var tone7 = new Audio("G.wav");
            tone7.play();
            break; 

        case "h":
            var tone8 = new Audio("H.wav");
            tone8.play();
            break; 

        case "i":
            var tone9 = new Audio("I.wav");
            tone9.play();
            break; 
        
        case "j":
            var tone10 = new Audio("J.wav");
            tone10.play();
            break; 

        case "k":
            var tone11 = new Audio("K.wav");
            tone11.play();
            break; 

        case "l":
            var tone12 = new Audio("L.wav");
            tone12.play();
            break;   

        case "m":
            var tone13 = new Audio("M.wav");
            tone13.play();
            break;

        case "n":
            var tone14 = new Audio("N.wav");
            tone14.play();
            break;

        case "o":
            var tone15 = new Audio("O.wav");
            tone15.play();
            break;

        case "p":
            var tone16 = new Audio("P.wav");
            tone16.play();
            break;

        case "q":
            var tone17 = new Audio("Q.wav");
            tone17.play();
            break;

        case "r":
            var tone18 = new Audio("R.wav");
            tone18.play();
            break;

        case "s":
            var tone19 = new Audio("S.wav");
            tone19.play();
            break;

        case "t":
            var tone20 = new Audio("T.wav");
            tone20.play();
            break;
    
        case "u":
            var tone21 = new Audio("U.wav");
            tone21.play();
            break;

        case "v":
            var tone22 = new Audio("V.wav");
            tone22.play();
            break;

        case "w":
            var tone23 = new Audio("W.wav");
            tone23.play();
            break;

        case "x":
            var tone24 = new Audio("X.wav");
            tone24.play();
            break;

        case "y":
            var tone25 = new Audio("Y.wav");
            tone25.play();
            break;

        case "z":
            var tone26 = new Audio("Z.wav");
            tone26.play();
            break;

        default: console.log("press any key");
    }
}