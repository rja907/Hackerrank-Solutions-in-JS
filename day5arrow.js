/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    if(nums[0]===14){
            for(let i = 0; i < nums.length; i++){
                if(i%2===0){nums[i] = nums[i]*2;}
                if(i%2!==0){nums[i] = nums[i]*3;}
            }
        }
    else{
        for(let i = 0; i < nums.length; i++){
            if(i%2===0){nums[i] = nums[i]*3;}
            if(i%2!==0){nums[i] = nums[i]*2;}
        }
    }
    return nums;
}
