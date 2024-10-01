
let flag=0;
function controller(x){
 flag = flag + x ;
 /*
 //left
 flag = 2 + (-1) = 1
 //right
 flag = 2 + 1 = 3 
 */
slideshow(flag);
}
slideshow(flag);

function slideshow(num){
    let slidess = document.getElementsByClassName('slides');

    if(num == slidess.length){
          flag=0;
          num=0;
    }
    if(num<0){
        flag=slidess.length-1;
        num=slidess.length-1;
    }
    for(let y of slidess){
        y.style.display = "none";
    }
    
    slidess[num].style.display = "block";
}