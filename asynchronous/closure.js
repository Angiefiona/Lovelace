// example1
let greet = () =>{
    let name = 'john';
    let displayName = ()=>{
        return `Hi I am ${name}`;
    }
    return displayName
}
let talk = greet("Happy");
console.log({talk});
console.log(talk("Happy"))


// example2
let nums =(num) =>{
    let add = (digit)=>{
        return digit+num
    }
    return add
}
let addition = nums(45);
console.log({addition});
console.log(addition(20));