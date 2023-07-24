var clock = document.getElementById("clock5"),
    clockSmall = document.getElementsByClassName("all2"),
    clock2   = document.getElementsByClassName("all"),
    i = 90,
    t = 90,
    a = 180;

function rotate() {
    
    i = i + 6;
    
    clock.style.transform = "rotateZ" + "(" + i + "deg)";
    
    if(i == 450) {
        
    i = 90;
        
    t = t + 6;
        
    clock2[0].style.transform = "rotateZ" + "(" + t + "deg)";
        
}   
    if( t == 180 && i == 90) {
        
        a = a + 7.5;
        
        clockSmall[0].style.transform = "rotateZ" + "(" + a + "deg)";
        
    } else if ( t == 270 && i == 90 ) {
        
        a = a + 7.5;
        
        clockSmall[0].style.transform = "rotateZ" + "(" + a + "deg)";
        
    } else if ( t == 360 && i == 90 ) {
        
        a = a + 7.5;
        
        clockSmall[0].style.transform = "rotateZ" + "(" + a + "deg)";
        
    } else if ( t == 450 && i == 90 ) {
        
        t = 90;
        
        a = a + 7.5;
        
        clockSmall[0].style.transform = "rotateZ" + "(" + a + "deg)";
        
    }
    
}

setInterval(rotate,1000);

