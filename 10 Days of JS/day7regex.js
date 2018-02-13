function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^(a|e|i|o|u).*\1$/;
    // '.*' means that there may be characters after that first captured character.
    // '\1$' checks that the last character matches the first captured charcter.

    /*
     * Do not remove the return statement
     */
    return re;
}
