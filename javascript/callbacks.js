function printFirstLine(arg){
    console.log("The callback funciton call to print is: ", arg)
}


function readFirstLine(filePathWithName, callBackFunc){
    let output=filePathWithName.toUpperCase();
    callBackFunc(output);
}

readFirstLine("lowercasestring", printFirstLine)