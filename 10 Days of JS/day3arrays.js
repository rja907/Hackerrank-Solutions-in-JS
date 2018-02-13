/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(max < nums[i]){
            max = nums[i];
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === max){
            nums[i] = -1;
        }
    }
    let newMax = 0;
    for(let i = 0; i < nums.length; i++){
        if(newMax < nums[i]){
            newMax = nums[i];
        }
    }
    return newMax;
}
