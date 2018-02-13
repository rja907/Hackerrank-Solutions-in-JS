/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a===0){return "Zero Error";}
    if(a>0){return "YES";}
    if(a<0){return "Negative Error";}
}
function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}
