'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return minusCountVia(countCharacters(collectionA), objectB.value)
}

function countCharacters(collectionA) {
  let result = [];
  countSameElements: for (let element of collectionA) {
    for (let object of result) {
      if (object !== undefined && object.key === element) {
        object.count++;
        continue countSameElements;
      }
    }
    result.push({key: element, count: 1})
  }
  return result;
}

function minusCountVia(collectionA, collectionB) {
  return collectionA.map(object => {
    collectionB.forEach(element => {
      if (element === object.key) {
        object.count -= Math.floor(object.count / 3);
      }
    });
    return object;
  });
}
