let success = true;
let promise = new Promise((resolve, reject) => {
    if(success){
        resolve("I have a job")
    }
    else{
        reject('I dont have a job')
    }
    
})
console.log({promise});

// promise chaining

promise.then(()=>{
console.log('I will pay all the debt')
})

promise.catch(() =>{
console.log('I will apply again after three months')
})

promise.finally(() =>{
    

})

