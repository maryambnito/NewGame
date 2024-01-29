    const prompt=require("prompt-sync")();
    const deposit=()=>{
     while(true){

         const depositAmount=prompt("Enter A Deposit Amount: ");
         const numberDepositAmount=parseFloat(depositAmount);
         
         if(isNaN(numberDepositAmount)||numberDepositAmount==0){
             console.log("Invalid Deposit Amount ,Try Again. ");
            }else{
            return numberDepositAmount;
            }

        }
    };
    const getNumberOfLines=()=>{
        while(true){
            const lines=prompt("Enter The Number Of Lines: ");
            const numberOfLines=parseFloat(lines);
            if(NaN(numberOfLines) || numberOfLines==0 || numberOfLines>=3){
                console.log("Invalid number Of Lines,Try Again. ");
            }else{
                return numberOfLines;
            }
        }
    };

   const depositAmount= deposit();
   const numberOfLines=getNumberOfLines();
    