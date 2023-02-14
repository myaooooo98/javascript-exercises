const removeFromArray = function(arrArg, ...otherArgs) {
    let arr = Array.from(arrArg);               //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    let args = otherArgs;                       //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    for (let i = 0; i < args.length; i++){
        if (arr.includes(args[i])){
            let index = arr.indexOf(args[i]);   //https://www.javascripttutorial.net/javascript-array-indexof/#:~:text=indexOf()%20method-,To%20find%20the%20position%20of%20an%20element%20in%20an%20array,the%20element%20is%20not%20found.
            arr.splice(index, 1);               //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_remove
        }
    }
    return arr;
};

// const removeFromArray = function (array, ...args){
//     const newArray = [];
//     array.forEach((item) => {
//         // push every element into the new array
//         // UNLESS it is included in the function arguments
//         // so we create a new array with every item, except those that should be removed
//         if (!args.includes(item)){
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };

// const removeFromArray = function (array, ...args){
//     return array.filter(val => !args.includes(val))
// };

// Do not edit below this line
module.exports = removeFromArray;
