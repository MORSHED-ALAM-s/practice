let weight = 100
let height = 2
let bmi = weight / (height*height)
let healthCategory

 if (bmi < 18.5){
    healthCategory = "you are underweight.";
 }else{
    if(bmi >= 18.5 && bmi <=24.9){
        healthCategory = "you are normal.";
    }else{
        if (bmi >= 25 && bmi <=29.9 ){
            healthCategory = "you are overweight.";
        }else{
            healthCategory ="you are obese.";
        }

    }
 }


 console.log(healthCategory)