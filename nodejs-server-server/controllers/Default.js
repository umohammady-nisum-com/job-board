'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.getAllListings = function getAllListings (req, res, next) {
  Default.getAllListings(req.swagger.params, res, next);
};

module.exports.getListingById = function getListingById (req, res, next) {
  Default.getListingById(req.swagger.params, res, next);
};

module.exports.newListing = function newListing (req, res, next) {
  Default.newListing(req.swagger.params, res, next);
};
