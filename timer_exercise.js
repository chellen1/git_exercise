

function countDown (num){
    let count = setInterval(function(){
    num--;
    if (num <= 0){ 
        clearInterval(count);
        console.log('DONE!');
    }
    else{
        console.log(num);
        }
    }, 1000)
}


function randomGame(){
    let counter = 1;
    let picker = setInterval(function(){
       let num =  Math.random();
        if (num < 0.75){
            counter++;
        }
        else{
            clearInterval(picker);
            console.log(counter);
        }
    }, 1000);
}