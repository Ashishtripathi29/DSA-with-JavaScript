// print the step to transfer the dist source to destination

function printStep(number,source,helper,destination){

    if(number==1){
        console.log("transfer disk",number,"from " ,source, "to " , destination);
        return;
    }
    printStep(number-1,source,destination,helper)
    console.log("transfer disk",number,"from " ,source, "to " ,destination )
    printStep(number-1,helper,source,destination)
}

printStep(3,"s","h","d")