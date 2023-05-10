let greet = () =>{
    console.log('hello there')
}
let people = () =>{
    console.log('There are many people today')
}
people();
setInterval(greet, 1000);
clearInterval()