let arr=[[34,6,54,3],[34,3,4,32],[23,5,5,0],[34,4,3,2]];


arr[2][3]=56;
console.log(arr[2][3]);
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("\n");
for(let row of arr){
    console.log(row);
}
console.log("\n");

for(let row of arr){
    for(let col of row){
        console.log(col);
    }
    
}