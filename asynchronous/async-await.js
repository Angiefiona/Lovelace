function greet(){
    console.log("welcome to our site")
};

let data = [{}];
 let createUser = new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=> {resolve('user sucesfully created')}, 5000);
        // resolve("user succesfully created")
    }
    else{
        setTimeout(()=> {resolve('user already exist')}, 5000);
        // reject("user already exist");
    }
    
 });

 async function createUserAccount(){
    let response = await createUser;
    console.log({response})
 }

 createUserAccount();