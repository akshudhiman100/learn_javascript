let i = "";

for(i=1;i<=10;i++){
   i +="";
   for(j=1;j<=10;j++){
    console.log(`${i} x ${j} = ${i * j}`)
}
}


let x = 5;

for(i=1;i<=5;i++){
    let row = "";

    for(j=1;j<=i;j++){
        row +="* ";
    }
       console.log(row) 
}