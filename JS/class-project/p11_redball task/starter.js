//create a bucket
//bucket should not exceed more then 10 balls
//ball should be red and white. [{color"red"}]

let filteredbucket = [];
let bucket = [];

function createBucket(redCount, whiteCount) {
  let total_count = redCount + whiteCount;
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
  }
}

function pickOnlyRedBall() {
  whiteballbucket = bucket.filter((item) => item.color !== "red");
  redBallBucket = bucket.filter((item) => item.color !== "white");
  filteredbucket.push(redBallBucket);

  bucket = whiteballbucket;
}

function main() {
  createBucket(3, 4);
  pickOnlyRedBall();
}
main();

console.log("bucket", bucket);
console.log("filtered-red-ball", filteredbucket.flat());
