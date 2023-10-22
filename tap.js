function findMissingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((acc, num) => acc + num, 0);
  const missingNumber = totalSum - arraySum;
  return missingNumber;
}

const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // 2

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // 8

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // 2
