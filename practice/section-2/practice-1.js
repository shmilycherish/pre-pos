'use strict';

function countSameElements(collection) {
  let result = [];
  countSameElements: for (let element of collection) {
    for (let object of result) {
      if (object != undefined && object.key == element) {
        object.count++;
        continue countSameElements;
      }
    }
    result.push({key: element, count: 1})
  }
  return result;
}
