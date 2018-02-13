/*
 * Create the function factorial here
 */
const factorial = (inputString) => {
    let sum = 1;
    const n = parseInt(inputString);
    for(let i = 1; i <= n; i++){
        sum = sum * i;
    }
    return sum;
}
