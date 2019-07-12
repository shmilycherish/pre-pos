'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (let object of collectionA) {
    for (let element of objectB.value) {
      if (object.key === element) {
        object.count--;
      }
    }
  }
  return collectionA;
}
