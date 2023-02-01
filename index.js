function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

console.log(`1.addition 

2.subtraction 

3.multipilication

4.division

select any option and two number:
`);

let selectedoption = prompt("Enter the option");

function calculate(calc) {
    let a = prompt("Enter number one");
    let b = prompt("Enter number two");
    console.log(calc(Number(a), Number(b)));

}
// console.log("1"== 1);
// console.log(typeof selectedoption);

if (Number(selectedoption) === 1){
    calculate(add);
}
else if (Number(selectedoption) === 2){
    calculate(sub);
}
else if (Number(selectedoption) === 3){
    calculate(multiply);
}

else if (Number(selectedoption) === 4){
    calculate(divide);
}

else{
        console.log("enter the right option");
}

// if(Number(selectedoption) !==1 &&Number(selectedoption) !== 2 &&Number(selectedoption) !== 3 &&Number(selectedoption) !== 4){

// }


