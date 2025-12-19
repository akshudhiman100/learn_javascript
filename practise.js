// function  CheckIfEvenOdd(a){
//     const remainder = a % 2;
//     if(remainder === 0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(CheckIfEvenOdd(0))
// console.log(CheckIfEvenOdd(5))

// function SmallestNo(a ,b ,c){
//     if(a < b && a < c){
//         return a;
//     }
//     if(b < a && b < c){
//         return b;

//     }
//     if(c < a && c < b){
//         return c;
//     }
//     return a;
// }
// console.log(SmallestNo(2,5,3))


// function reversed(String){
//      if(typeof String !== 'string'){
//         throw new Error("only strings are allowed")
        
//      }

//     let result = "";
//     for (let i = String.length -1 ; i >= 0 ; i--)
// {
//     // result = result + String[i];
//     result += String[i];
// }
// return result;
    
// }
// console.log(reversed("Akshit"));
// console.log(reversed("Psychology"))


// function reversed2(Str){
//     const Input = Str.split('');
//     const Array = Input.reverse();
//     // const sum = Array.join(); 
  
//     return Array;
// }
// console.log(reversed2("Akshit"))



function Calculate(Input){
    let result = 1;
    for(let i = 1; i <=Input; i++){
        result *=  i;
    }
    return result;
}

console.log(Calculate(4))
console.log("3!",Calculate(3))
console.log("4!",Calculate(4))



function isLeapYear(year){
    if(year % 4 ===0){
        return "true";
    }else{
        return "false";
    }
}

console.log("isLeapYear(2022))",isLeapYear(2022));
console.log("isLeapYear(2024))",isLeapYear(2024));



// function multiplicationTable(OF , Till){
//      console.log(OF , Till)
//     for(let i=1; i <= Till; i++){
//         console.log(`${OF} * ${i} = ${i * OF}`)
//     }
// }

// multiplicationTable(4,10);



function MaximumNumber(arrayOfNumbers){
     Max = arrayOfNumbers[0];

     for(let i = 1; i < arrayOfNumbers.length ; i++){
        if(arrayOfNumbers[i] > Max){
            Max = arrayOfNumbers[i];
        }
     }
           return Max;
}

console.log(MaximumNumber([4,5,6]));


// checkif vowels or consonant
// // function checkVolwelsAndconsonant(inputString){
//     const vowels = "aeiou"
//     inputString = inputString.toLowerCase();
//     if(vowels.includes(inputString)){
//         return "vowel";
//     }else{
//         return "consonant";
//     }
// }
// console.log(checkVolwelsAndconsonant("a"));
// console.log(checkVolwelsAndconsonant("m"));

// checkif string is a palindrome or Not

function isPalindrome(inputString) {
    for (let i = 0; i < inputString.length / 2; i++) {
        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("ashish")); 
console.log(isPalindrome("madam"));  
console.log(isPalindrome("level"));  


// returns the result of raising a given number to a specified power

function calculatePower(base,exponant){
    let result = 1;
    for (let i = 1; i <= exponant; i++){
        result = result * base;
        
    }
    return result;
}

calculatePower(4,3)


// check all the factors are given no.

function findAllfactor(inputnumber){
    if(inputnumber < 1){
        throw new Error ("inputnumber should be greater than zero")
    }
    let result = [];
    for(let i = 1; i <= inputnumber; i++){
        if(inputnumber % i ===0){
            result.push(i);
        }
    }
    return result;
}

console.log(findAllfactor(6));
