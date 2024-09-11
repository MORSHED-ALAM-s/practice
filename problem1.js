const numbers =[24,2,54,8,57,58,5,8]

let big = numbers[0];
for(let i =1; i <numbers.length; i++){
    if (numbers[i] > big){
        big =numbers[i]
    }
}
console.log (big)