function sumOfAllOddNumbers(nums) {
  let count = 0
  for(let i=0; i < nums.length; i++){
    let num = nums[i]%2
    if(num!=0){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;