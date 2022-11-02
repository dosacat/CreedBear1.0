import UserDB from "./config/db.js";
import {delay,returnStatus} from "./helper/helper.js";


let users = UserDB()

// To read array of db users and return a paginated value with default showing page 1.
function getUsers(requestedPage=1) {

    const paginationLimit = 10;
    const userCount = users.length;
    const pageCount = Math.ceil(userCount/ paginationLimit);
    let currentPage = requestedPage;
    let leastUser = (currentPage-1)*paginationLimit
    let maxUser = currentPage*paginationLimit
    return {
        page:currentPage,
        per_page:paginationLimit,
        total:userCount,
        total_pages:pageCount,
        data:users.slice(leastUser,maxUser)
    }


    
}

// To read a single user of :id
function getUser(id) {
    return {data:users[id]};
    
}

// To create a user
function createUser(data){
    if (!data.firstName || !data.lastName || !data.email){
        throw new Error("The data provided is incomplete");
    }

    else {
        const id = users.length+1
        const newUser = { id, ...data };
        users = [ ...users, newUser ];
        return {data:returnStatus("success")}
    }
}

// To update a user
const updateUser = (id, data) => {
    if (!users[id]){
        throw new Error("User does not exist.")
    }
    else {
        users[id] = {...users[id],...data};
        return {data:returnStatus("success")}
    }
    

}

//Logic to delet user
const deleteUser = (id) =>{
    if (!users[id]){
        throw new Error("User does not exist.")
    }
    else {
        users = users.filter((obj)=> obj.id !== id)
        return {data:returnStatus("success")}
    }

}

//Logic to login user
const loginUser = (email) => {
  const id = users.find(user => user.email===email) || 1;
    if (!users[id]){
      throw new Error("User does not exist.")
    }
    else {
        return {
            "data": {
              "status":"success",
              "user": users[id]
            }
          }
    }

}

// logic to GET/READ all users
const doGetUsers = async (requestedPage) => {
    try {
      await delay(1000);
      const result = await getUsers(requestedPage);
      console.log(result);
    } catch (error) {
      await delay(1000)
      console.log(error);
    }
  };
  
// logic to GET/READ user with :id
  const doGetUser = async (id) => {
    try {
      await delay(1000);
      const result = await getUser(id);
      console.log(result);
    } catch (error) {
      await delay(1000)
      console.log(error);
    }
  };

// To POST/CREATE a user 
  const doCreateUser = async (data) => {
    try {
      await delay(1000)
        const result = await createUser(data);
        console.log(result);
    } catch (error) {
        await delay(1000)
        console.log(error)
      
    }
  };

// To PUT/UPDATE a user 
const doUpdateUser= async (id,data) => {
    try {
      await delay(1000)
        const result = await updateUser(id,data);
        console.log(result);
    } catch (error) {
        await delay(1000)
        console.log(error)
      
    }
}

// To delete USER data
const doDeleteUser = async(id) => {
    try {
        await delay(1000)
          const result = await deleteUser(id);
          console.log(result);
      } catch (error) {
          await delay(1000)
          console.log(error)
        
      }
}

const doLoginUser = async (id) => {
    try {
        await delay(1000);
        const result = await loginUser(id);
        console.log(result);
      } catch (error) {
        await delay(1000)
        console.log(error);
      }
}


export {doGetUsers,
        doGetUser,
        doCreateUser,
        doUpdateUser,
        doDeleteUser,
        doLoginUser};
