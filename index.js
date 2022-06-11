var c= 'check2.png';

function countdown() {
    var count1 = 18;
    z=document.getElementById("js").innerHTML;

    var myTimer = setInterval(function() {
        console.log(count1);
      y=document.getElementById("js").innerHTML=z+"(Will be completed after "+count1+" phases....)";
      count1--;
      if (count1 == 0) {
        document.getElementById("js").innerHTML= z;
        clearInterval(myTimer);
      }
    }, 1000);
  }

function Function(){
    // z=document.getElementsByClassName("li");
    countdown();
setTimeout(changeImage,18000);
}
function changeImage() {
    
    x = document.getElementsByClassName("check");
  
    for (var i = 0; i < x.length; i++) {
        x[i].src = c;
    }
    y = document.getElementsByClassName("check2");
    for (var j = 0; j < y.length; j++) {
        y[j].src = c;
    }
}

function Function2()
{
    
    // countdown();
    change();
 }
    function change() {
        var img1='check2.png';
        const score = document.querySelector('#score');
        score.classList.remove('sscore');
        
        a = document.getElementsByClassName("h");
        var b=0;
        setInterval(function(){
            if(b>a.length)
            {
                clearInterval();
            }
           a[b].src=img1;
           b++;
        },1000);
    // setTimeout(Function,14000);
    Function();
}
