//ques8
let nums = [10, 3, 7, 20, 13, 2];
//1
let squares= nums.map(n=>n*n)
console.log(squares);

//2
let primes=nums.filter(n=> {
    if(n<2) return false;
    for (let i=2;i<n;i++){
        if(n%i===0) return false
    }
    return true
}) 
console.log(primes);

//3
const sum=nums.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

//4
const descending=nums.sort((a,b)=>b-a)
console.log(descending);

//ques 9
function displayCar(){
    console.log("This is a car")
}
function displayTruck(){
    console.log("This is a truck")
}
function displayBike(){
    console.log("This is a bike")
}
function vehicleInfo(vehicleCategory,displayfn){
    console.log("vehicle:", vehicleCategory);
    displayfn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
