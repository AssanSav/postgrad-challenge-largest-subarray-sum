let currentSum = 0;
let largestSum = 0;

const largestSubarraySum = (array) => {
  for (let number of array) {
    currentSum = Math.max(0, (currentSum + number));
    largestSum = Math.max(largestSum, currentSum)
  }
  return largestSum
}
