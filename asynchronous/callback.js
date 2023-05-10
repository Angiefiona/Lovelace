// callbacks are functions called as arguments
function talk(statement, callback){
    console.log(statement)
    callback();
};

function greet(){
    console.log('Hello here');
}
talk('I love the coronation', greet)