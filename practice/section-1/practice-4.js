'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  for (let objectOfCollectionA of collectionA) {
    for (let element of objectB.value) {
      if (objectOfCollectionA.key == element) {
        result.push(element)
      }
    }
  }
  return result;
}
