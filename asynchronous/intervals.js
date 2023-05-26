let greet = () =>{
    console.log('hello there')
}
let people = () =>{
    console.log('There are many people today')
}
people();
setInterval(greet, 1000);
clearInterval()


let intervalId = () => {
    console.log("Interval running......")

}
// // Define a variable to store the interval ID
// let intervalId;

// // Start the interval
// function startInterval() {
//   intervalId = setInterval(() => {
//     // Code to be executed repeatedly
//     console.log("Interval running...");
//   }, 1000);
// }

// // Clear the interval
// function clearIntervalAsync() {
//   clearInterval(intervalId);
//   console.log("Interval cleared.");
// }

// // Start the interval
// startInterval();

// // Wait for some time asynchronously (e.g., using setTimeout)
// setTimeout(() => {
//   // Clear the interval after a certain time
//   clearIntervalAsync();
// }