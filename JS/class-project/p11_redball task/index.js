/**
 * INFOs: I have three buckets. Each bucket can hold multiple balls (max 10). There are two collor of balls, Red and white.
 * OUTPUT: I need all red balls.
 */

// Entity
// let bucket = [];
// let ball = {
//     color: "" // Red, White
// };

let resultBucket = [];

/**
 * Create new bucket
 * @param {number} redCount
 * @param {number} whiteCount
 * @returns bucket
 */
function createBucket(redCount, whiteCount) {
    let totalCount = redCount + whiteCount;
    if (totalCount > 10 || totalCount <= 0) {
        console.log("Total count should between 1 to 10");
        return null;
    }
    const newBucket = new Array()

    // Insert red ball
    for (let index = 0; index < redCount; index++) {
        const newBall = {};
        newBall.color = "Red"
        newBucket.push(newBall)
    }

    // Insert white ball
    for (let index = 0; index < whiteCount; index++) {
        const newBall = {};
        newBall.color = "White"
        newBucket.push(newBall)
    }
    return newBucket;
}

/**
 * Pick all red balls from bucket.
 * @param {object} bucket
 * @returns
 */
function pickAllRedBalls(bucket) {
    const redBalls = []
    const otherBalls = bucket.filter((ball) => {
        if (ball.color === "Red") {
            redBalls.push(ball);
            return false;
        } else {
            return true
        }
    })
    bucket = otherBalls;
    return redBalls;
}



function main() {
    const bucket1 = createBucket(3, 5);
    const bucket2 = createBucket(1, 3);
    const bucket3 = createBucket(5, 2);

    console.log("bucket1 ", bucket1);
    resultBucket.push(pickAllRedBalls(bucket1));
    console.log("bucket1 after ", bucket1);

    console.log("bucket2 ", bucket2);
    resultBucket.push(pickAllRedBalls(bucket2));
    console.log("bucket2 after ", bucket2);

    console.log("bucket3 ", bucket3);
    resultBucket.push(pickAllRedBalls(bucket3));
    console.log("bucket3 after ", bucket3);

    console.log("resultBucket == ", resultBucket.flat())

}

main();
