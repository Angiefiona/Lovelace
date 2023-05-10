// example1
let greet = () =>{
    let name = 'john';
    let displayName = ()=>{
        return `Hi I am ${name}`;
    }
    return displayName
}
let talk = greet();
console.log({talk});


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