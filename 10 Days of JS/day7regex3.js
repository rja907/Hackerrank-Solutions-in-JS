function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp('\\d+', 'g');
    //The "g" flag indicates that the regular expression should be tested against all possible matches in a string..
    //\d a shorthand character class, which matches all numbers; it is the same as [0-9].
    //+ one or more of the expression.
    /*
     * Do not remove the return statement
     */
    return re;
}
