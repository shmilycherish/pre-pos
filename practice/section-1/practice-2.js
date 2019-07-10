'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for (let flatCollectionB of collectionB) {
    for (let elementOfCollectionA of collectionA) {
      for (let elementOfFlatCollectionB of flatCollectionB) {
        if (elementOfCollectionA == elementOfFlatCollectionB) {
          result.push(elementOfCollectionA);
          break;
        }
      }
    }
  }
  return result;
}
