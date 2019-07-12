'use strict';

function countSameElements(collection) {
  let result = [];
  countSameElements: for (let element of collection) {
    let character = element.match(/[a-z]/g)[0];
    let count = element.match(/\d+/g) != null ? parseInt(element.match(/\d+/g)[0]) : 1;
    for (let object of result) {

      if (element.includes(object.key)) {
        object.count += count;
        continue countSameElements;
      }
    }
    result.push({key: character, count: count})
  }
  return result;
}
