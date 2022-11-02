import {doGetUser,doGetUsers,doCreateUser,doUpdateUser,doDeleteUser,doLoginUser} from '../user_api.js'

// To GET / READ all users node src/api/routes/users with pagination
console.log(doGetUsers());

// //To GET / READ :id user.
console.log(doGetUser('1'))

// to CREATE / READ a user
console.log(doCreateUser({
    firstName:"Aloola",
    lastName:"Disney",
    email:"disney@ol",
    avatar:".img"
}))


// to PUT / UPDATE a user
console.log(doUpdateUser("48",{"firstName":"Alice"}))

// To DELETE a user
console.log(doDeleteUser(11))

// TO LOGIN WITH EMAIL returns 2nd person as default since no data persistence.
console.log(doLoginUser("blah@blah.com"))


