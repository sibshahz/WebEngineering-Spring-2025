function doOperations(){
    setTimeout(() => {
        console.log("Operation completed as soon as possible");

    },1000)
}

doOperations();

for(let i=0;i<1000000;i++){
    console.log(i);
}