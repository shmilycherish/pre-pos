'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for (let index = 0; index < collectionA.length; index++) {
    for (let collectionBIndex = 0; collectionBIndex < collectionB.length; collectionBIndex++) {
      if (collectionA[index] == collectionB[collectionBIndex]) {
        result.push(collectionA[index])
      }
    }
  }
  return result
}
