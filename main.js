function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {
    function getRandomBin(b){
        var bin = "";
        for(var i=0;i<b;i++){
            bin+=flip()? "1" : "0";
        }
        return bin;
    }

    try { 
        if(n>1000000){
            throw "Error, the number cannot be >1000001";
        }else if(n<0){
            throw "Error, the number cannot be <0"
        }else{
            var maxNumber=n-1;
            var maxBinaryLenght=maxNumber.toString(2).length;
            var rnd;
            do{
                rnd=parseInt(getRandomBin(maxBinaryLenght),2);
            }while(rnd>maxNumber);
            
            return rnd;
        }
    }
    catch(err) {
        console.log("Error: "+err);
    }
    
}