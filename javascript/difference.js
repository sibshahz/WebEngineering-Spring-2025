function callBackHandler(someFunc){
    setTimeout(() => {
        //callThis
        someFunc("Value returned from callBackHandler: 5")
    },2000)
}
function callThis(value){
    console.log(value)
    //store this value in database
    // code... 
}
callBackHandler(callThis);



function promiseHandler(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve("Value returned from promiseHandler: 10");
            reject("NOT A VALUE")
        },3000)
    })
}

promiseHandler().then((value) => {
    console.log(value)
    //store in database
}).catch((someError) => {
    console.log("ERROR OCCURED: ", someError)
})

let value = await promiseHandler()