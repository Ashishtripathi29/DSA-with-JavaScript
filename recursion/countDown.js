// write a program to print n to 1 number 

function countDown(number){
    if(number<=0) return;
    console.log(number)
    countDown(number-1)
}

let num=1;
countDown(num)