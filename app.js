// let age =prompt("sheiyvane asaki")
// window.localStorage.setItem("age", age)
// console.log(age);
// let userAge = window.localStorage.getItem("age")
// console.log(userAge);
// window.localStorage.removeItem("age")
// window.localStorage.clear()

// let userList = []

// let userCount = Number(prompt("შეიყვანეთ მომხმარებლების რაოდენობა"))

// for( let i=0; i<userCount; i++){
//     let firstname = prompt("შეიყვანეთ მომხმარებლის სახელი")
//     let age = prompt("შეიყვანეთ ასაკი")
//     let userObject ={
//         id:i,
//         firstname, // firstnamename
//         age // age:age
//     }
//     userList.push(userObject)
// }

// // localStorage.setItem("userList", userList)
// // console.log(userList);
// let strUsersList = JSON.stringify(userList)
// localStorage.setItem("usersList",strUsersList )
// let usersList = localStorage.getItem("usersList")
// console.log(userList);

// let strUsersList = localStorage.getItem("usersList")
// let usersList = JSON.parse(strUsersList)
// console.log(usersList);

// let age = localStorage.getItem("age")
// // console.log(age);
// if(age == null){
//     age = prompt("შეიყვანეთ ასაკი")
//     localStorage.setItem("age", age)
// }
// console.log(age);


// let age = localStorage.getItem("age")==null?prompt("შეიყვანეთ ასაკი"):localStorage.getItem("age")
// console.log(age);
function findMax(){
    let a= 5
    let b = 10
    let c = a+b
    console.log(c);
    console.log("Function");
}

async function afindMax() {
    const postList =  await fetch("")
}
findMax()
afindMax()