'use strict';
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

exports.getAllListings = function(args, res, next) {
  /**
   *
   * no response value expected for this operation
   **/
  res.setHeader('Content-Type', 'application/json');
  res.statusCode=200;
  res.end(JSON.stringify(db.get('listings').value()));
}

exports.getListingById = function(args, res, next) {
  /**
   * Get job by ID
   * Returns a single job
   *
   * id Long ID of pet to return
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "Doe",
  "qualifications" : "aeiou",
  "phone" : "(999) 999-9000",
  "apply" : "aeiou",
  "description" : "aeiou",
  "location" : "aeiou",
  "id" : 0,
  "title" : "aeiou",
  "salary" : 6,
  "jobType" : "aeiou",
  "email" : "test@test.com"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.newListing = function(args, res, next) {
  /**
   * Add a new job listing
   * 
   *
   * body Body Listing object that needs to be added to the store (optional)
   * no response value expected for this operation
   **/

  res.setHeader('Content-Type', 'application/json');
  res.statusCode=201;
  
  var result=db.get('listings')
          .push({id: 3, text: args.JobListing.value.text})
          .value()
        res.end(JSON.stringify(result));
}

