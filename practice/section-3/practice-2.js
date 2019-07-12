'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(object => {
    objectB.value.forEach(element => {
      if (element === object.key) {
        object.count -= Math.floor(object.count / 3);
      }
    });
    return object;
  });
}
