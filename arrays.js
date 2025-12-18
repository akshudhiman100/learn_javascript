// const myArr = [0,1,2,3,4,5]


// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// Arrays method

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// // slice  and splice 

// console.log("A ",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ",myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn2)
 

// ascending and descending order 

// const numArr = [6,8,45,3,5,66,6,7,2,4,7,0,9,6,4,2,1,5,1,1,67,45,34,74];
// function unique(arr) {
//     let unique = [];

//     for (let i = 0; i < arr.length; i++) {
//         let isExist = false;

//         for (let j = 0; j < unique.length; j++) {
//             if (arr[i] === unique[j]) {
//                 isExist = true;
//                 break;
//             }
//         }
//                 if (!isExist) unique.push(arr[i]);
// }
        
//      let asc = unique.slice();

//     for (let i = 0; i < asc.length; i++) {
//         for (let j = i + 1; j < asc.length; j++) {
//             if (asc[i] > asc[j]) {
//                 let temp = asc[i];
//                 asc[i] = asc[j];
//                 asc[j] = temp;
//             }
//         }
//     }
//  let desc = asc.slice().reverse();

//     return { ascending: asc, descending: desc };
// }

// const result = unique(numArr);

// console.log("Ascending (Unique):", result.ascending);
// console.log("Descending (Unique):", result.descending);
   
    


// // using array

// const maxArr = [23,2,44,5,34]

// const res = Math.min.apply(null, maxArr)
// const response = Math.max.apply(null, maxArr)
// console.log(res)
// console.log(response)


// ARRAY METHODS USING ARRAY SORT

const fruit = ["Banana","Apple","Mango","Guava","Grapes"]

// console.log(fruit.sort())

console.log(fruit.reverse())


// Array iteration
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)