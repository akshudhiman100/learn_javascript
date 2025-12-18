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