console.log("This is a typescript file!!!");
// adding interface
/*
interface User {
    name: string;
    id: number;
    isAdmin: boolean;
}
let newUser: User = { // here we are defining the type of newUser
    name: "John",
    id: 1,
    isAdmin: true
}

let newUser2: User = { // here we are defining the type of newUser
    name: "John",
    id: 1,
    isAdmin: true
}

function printHello(): void {
    console.log("Hello!");
    // return "hello"; // TypeScript will give an error here
  }
printHello();

function throwError(): never {
    throw new Error("An error occurred!");
  }

  
// type annotation example: it is used to define the type of a variable and it is used when we declare a variable
function addUser(user: User): string{
    return `User added with name ${user.name}`;
}

// here type inference: is refers to the ability of the compiler to automatically determine the data type of a value based on its usage. 
let userName = "Jane";  // type: string
let userID = 10;  // type: number
let uniqueID = userName + userID;
// but here normal js also do the same thing..according to the definition...then what is the difference? the main differece is that type inference will happen in compile time in typescript but in js it happen in run time 

// array in typescript
let arr: number[] = [1,2,3,4,5];
// arr[0] = "hello"; // error
arr[0] = 6; // correct
let arr2: string[] = ["hello", "world"];
let arr3: boolean[] = [true, false];

// Tuple in typescript
// tuple is a fixed length array where each element has its own type and the order of the types is fixed
let user: [number, string, boolean, number, string];
user = [1, "John", true, 20, "Admin"];
// user = ["John", 1, true, 20, "Admin"]; // error
user[0] = 2;
user[1] = "Jane";
// destructuring tuple means we can assign the value of tuple to a variable. 
let [id, nameN, isAdmin, age, role] = user;
console.log(id, nameN, isAdmin, age, role);
userName = user[1];

*/

// interface in typescript
interface User {
    name: string;
    id: number;
    greet(): string;
  }

  const user: User = {
    name: 'Alice',
    id: 1,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

//   const user: User = { name: 'Alice' }; // Error: Property 'id' is missing in type '{ name: string; }'

// const user: User = { name: 'Alice', id: '10' };

interface GetGreetingFn { // here we are 
    (user: User): string;
  }

  const getGreeting: GetGreetingFn = (user: User) => {
    return user.greet();
  };
  
  console.log(getGreeting(user));