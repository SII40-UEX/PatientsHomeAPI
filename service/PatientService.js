'use strict';


/**
 * Gets the blood oxygen
 *
 * returns String
 **/
exports.getBloodOxygen = function() {
  return new Promise(function(resolve, reject) {
    var res = [];

    for (let index = 0; index < 10; index++) {
      res.push([Math.floor(Math.random() * (100 - 90) + 90),new Date()])
    }

    if (Object.keys(res).length > 0) {
      resolve(res);
    } else {
      resolve();
    }
  });
}


/**
 * Gets the heart rate
 *
 * returns String
 **/
exports.getHeartRate = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Get Correctly";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post alert
 *
 * body String  (optional)
 * returns String
 **/
exports.postAlert = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Update Correctly";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

