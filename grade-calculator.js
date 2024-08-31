/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let grade = 50;
let result;

if (grade <= 100 && grade >= 90){
    result = "Your result is 'A' grade"
}else 
    if (grade < 90 && grade >= 80) {
    result = "Your result is 'B' grade"
} else 
    if (grade < 80 && grade >= 70) {
        result = "Your result is 'C' grade" 
    } else 
        if (grade < 70 && grade >= 60) {
            result = "Your result is 'D' grade" 
        } else {
            result = "Your result is 'F' grade"  
        }
        


console.log(result)