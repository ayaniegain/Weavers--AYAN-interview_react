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
//   return bucket;
}



function pickOnlyRedBall(){

    let onlyredBall= bucket.filter((ball)=>{
 
         if (ball.color!=="red") {
             // console.log(ball)
             bucket.push(ball)
         }else{
 
             // console.log("first")
             return  ball
 
         }
         
     })
     // console.log("xc",onlyredBall)
     filteredbucket.push(onlyredBall)
 
 }
 
 






// console.log("onlywhite",bucket)



function main() {
    let bucketElem = createBucket(3, 4);
    pickOnlyRedBall();
    //   console.log(bucketElem);
}
main();
console.log("bk",bucket)

// console.log("onlywhite",bucket)
// console.log("filtered",filteredbucket.flat())
