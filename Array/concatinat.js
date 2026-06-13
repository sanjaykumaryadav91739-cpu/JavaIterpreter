const num1=[23,56,43,34];
const num2=[2,4,6,87];
const num3=[4,65,33,22];
const num=num1.concat(num2,num3);
console.log(num);

console.log("\n");

const a=[...num1,...num2,...num3];
console.log(a);