function distanceFromHqInBlocks(d) {
    const hq = 42
    let distance = d - hq
    if (d < hq){
     distance = distance * -1
    }
    return distance;
   }
 
   function distanceFromHqInFeet(someValue) {
     const blockSize = 264
     let distanceInFeet = distanceFromHqInBlocks(someValue) * blockSize
     return distanceInFeet;
     
   }
 
   function distanceTravelledInFeet(start, destination) {
    const blockSize = 264
    let distanceTravFt = (destination - start) * blockSize
    if (distanceTravFt < 0){
     distanceTravFt = distanceTravFt * -1
    } 
    return distanceTravFt;
 
   }
 
   function calculatesFarePrice(start, destination) {
    const pricePerFt = 0.02
    const flatRate = 25
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
     return 0
    }
    else if (distance > 400 && distance < 2000){
     let newDistance = distance - 400
     let cost = newDistance * pricePerFt
     return cost
    }
    else if (distance > 2000 && distance <= 2500){
     return 25
    }
    else {
     return 'cannot travel that far'
    }
 
   }