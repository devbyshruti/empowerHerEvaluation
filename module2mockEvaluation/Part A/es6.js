//ques1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined=[...arr1,...arr2]
console.log(combined);

//ques2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile={...person,...extra}
console.log(profile);

//ques3
function sumAll(...num){
    let total=0;
    for(let n of num){
        total+=n;
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4))

//ques4
let numbers = [10, 20, 30, 40, 50];
let [a,...remaining]=numbers;
console.log(a)
console.log(remaining)

//ques5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const {
    address:{
        city,
        geo:{lat,lng}

    }
} =user
console.log(city)
console.log(lat)
console.log(lng)

//ques6
const multiply=(a,b)=> a*b;

//ques 7 
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp.details?.profile?.profile?.role)

