'use strict';

function countSameElements(collection) {

  return collection.reduce((result, element) => {
    let character = element.match(/[a-z]/g)[0];
    let count = element.match(/\d+/g) != null ? parseInt(element.match(/\d+/g)[0]) : 1;
    let object = result.filter(objectInResult => element.includes(objectInResult.name));
    if (object.length !== 0) {
      object[0].summary += count;
    } else {
      result.push({name: character, summary: count})
    }
    return result;
  }, []);

}
