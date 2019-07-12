'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return minusCountVia(countCharacters(collectionA), objectB.value);
}

function countCharacters(collection) {
  return collection.reduce((result, element) => {
    let character = element.match(/[a-z]/g)[0];
    let count = element.match(/\d+/g) != null ? parseInt(element.match(/\d+/g)[0]) : 1;
    let object = result.filter(objectInResult => element.includes(objectInResult.key));
    if (object.length !== 0) {
      object[0].count += count;
    } else {
      result.push({key: character, count: count})
    }
    return result;
  }, []);
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

