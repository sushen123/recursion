function fibsLoop(number) {
    const sequenceArray = [0, 1];
    for (let i = 2; i < number; i++) {
      sequenceArray[i] = sequenceArray[i - 1] + sequenceArray[i - 2];
    }
    return sequenceArray;
  }
  
  console.log(fibsLoop(8));

  function fibsRecursive(number, sequenceArray = [0, 1]) {
    if (sequenceArray.length >= number) {
      return sequenceArray;
    } else {
      return fibsRecursive(number, [
        ...sequenceArray,
        sequenceArray[sequenceArray.length - 1] +
          sequenceArray[sequenceArray.length - 2],
      ]);
    }
  }
  
  console.log(fibsRecursive(8));