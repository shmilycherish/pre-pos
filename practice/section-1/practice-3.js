'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  for (let elementOfCollectionA of collectionA) {
    for (let elementOfObjectB in objectB) {
      let collectionB = objectB[elementOfObjectB];
      for (let elementOfCollectionB of collectionB) {
        if (elementOfCollectionA == elementOfCollectionB) {
          result.push(elementOfCollectionA);
          break;
        }
      }
    }
  }
  return result;
}
