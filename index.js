function produceDrivingRange(blockRange) {
  return function (firstBlock, secondBlock) {
    totalBlocks = parseInt(secondBlock.replace('th', '')) - parseInt(firstBlock.replace('th', ''));
    totalDifference = Math.abs(blockRange - totalBlocks);
    if (blockRange <= totalBlocks) {
      return `${totalDifference} blocks out of range`;
    } else {
      return `within range by ${totalDifference}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
