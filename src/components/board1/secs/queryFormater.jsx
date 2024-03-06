function findSmallestNumber(arr) {
  return Math.min(...arr.map(Number));
}

function findLargestNumber(arr) {
  return Math.max(...arr.map(Number));
}

export default function queryFormater(arr) {
  if (arr.length === 1) {
    return `eq,${arr[0]}`;
    // eq , 1;
  } else {
    return `bt,(${findSmallestNumber(arr)}%2C${findLargestNumber(arr)})`;
    // bt,(1%2C50)
  }
}