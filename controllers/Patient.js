'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.getBloodOxygen = function getBloodOxygen (req, res, next) {
  Patient.getBloodOxygen()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHeartRate = function getHeartRate (req, res, next) {
  Patient.getHeartRate()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAlert = function postAlert (req, res, next, body) {
  Patient.postAlert(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
