//create a bucket
//bucket should not exceed more then 10 balls
//ball should be red and white. [{color"red"}]

let filteredbucket = [];
let bucket = [];

function createBucket(redCount, whiteCount, blueCount) {
  let total_count = redCount + whiteCount + blueCount;
  if (total_count >= 10 || total_count <= 0) {
    console.log("total count should be proper");
  } else {
    i = 0;
    while (i < redCount) {
      bucket.push({ color: "red" });
      i++;
    }
    i = 0;
    while (i < whiteCount) {
      bucket.push({ color: "white" });
      i++;
    }
    i = 0;
    while (i < blueCount) {
      bucket.push({ color: "blue" });
      i++;
    }
  }
}
function pickOnlyRedBall() {
  let otherBallinbucket = bucket.filter((item) => item.color !== "red");
  let redBallBucket = bucket.filter((item) => {
    if (item.color === "red") {
      return item;
    }
  });

  filteredbucket.push(redBallBucket);

  bucket = otherBallinbucket;
}

function main() {
  createBucket(3, 4, 2);
  pickOnlyRedBall();
}
main();

console.log("bucket", bucket.flat());
console.log("filtered-red-ball", filteredbucket.flat());
