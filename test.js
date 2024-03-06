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

console.log(queryFormater(["2"]));
console.log(
  queryFormater([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "17",
    "18",
    "22",
    "24",
    "26",
    "27",
    "29",
    "30",
    "32",
    "33",
    "34",
    "36",
    "46",
    "48",
    "49",
    "50",
  ])
);
console.log(queryFormater(["5"]));
console.log(queryFormater(["22", "39"]));
console.log(queryFormater(["13"]));
console.log(queryFormater(["2", "33", "12", "39", "19"]));
