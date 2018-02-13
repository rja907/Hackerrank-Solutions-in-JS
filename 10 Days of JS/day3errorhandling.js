/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        var b = s;
        b = s.split('').reverse().join('');
        console.log(b);
    }
    catch(err){
        if(b===s){
            console.log("s.split is not a function");
            console.log(s);
        }
    }
}
