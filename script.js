// 1

const user = {
    name: 'John',
    age: 25,
    hobby: 'reading',
    premium: true
  };

  const { name, age, hobby, premium } = user;
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
 
  for (const key of Object.keys(user)) {
    const value = user[key]; 
    console.log(`${key}: ${value}`);
  }

//   2

function countProps(obj) {
    const { length } = Object.keys(obj); 
    return length;
  }
  
  console.log(countProps({ name: "John", age: 30 }));

//   3

function findBestEmployee(employees) {
    let best = "";
    let maxTasks = 0;
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        best = name;
      }
    }
  
    return best;
  }
  
  console.log(findBestEmployee({
    Anna: 29,
    David: 35,
    Helen: 1
  })); 
  
//   4

function countTotalSalary(employees) {
    let total = 0;
  
    for (const salary of Object.values(employees)) {
      total += salary;
    }
  
    return total;
  }
  
  console.log(countTotalSalary({
    Anna: 1000,
    David: 1500,
    Helen: 500
  }));

//   5

function getAllPropValues(arr, prop) {
    const result = [];
    for (const { [prop]: value } of arr) { 
      result.push(value);
    }
    return result;
  }
  
  const usersArray = [
    { name: 'Alice', age: 25, role: 'admin' },
    { name: 'Bob', age: 30, role: 'user' },
    { name: 'Charlie', age: 35, role: 'moderator' }
  ];
  
  console.log(getAllPropValues(usersArray, 'role'));
  console.log(getAllPropValues(usersArray, 'age'));  
  console.log(getAllPropValues(usersArray, 'name')); 

//   6

function calculateTotalPrice(allProducts, productName) {
    let total = 0;
  
    for (const { name, price, quantity } of allProducts) { 
      if (name === productName) {
        total = price * quantity;
        break;
      }
    }
  
    return total;
  }
  
  const store = [
    { name: "Apple", price: 10, quantity: 5 },
    { name: "Banana", price: 3, quantity: 10 }
  ];
  
  console.log(calculateTotalPrice(store, "Banana")); 
  