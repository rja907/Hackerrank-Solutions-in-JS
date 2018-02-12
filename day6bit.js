/*
*	Return the largest value of any a & b < k in S (where a < b).
*
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    if((k | k-1) > n){
       return k-2;
    }
    else{
       return k-1;
   }
}
