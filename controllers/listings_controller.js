const ListingModel = require('../models/listing');

module.exports = {

  createListing(req, res, next) {
    var listing = new ListingModel(req.body);

    listing.save(function (err) {
      if (err) {
        next(err);
      } else {
        res.json(listing);
      }
    });
  },
    
  updateListing(req, res, next) {
    ListingModel.findOneAndUpdate({ id: req.body.id }, req.body, {new: true}, (err, listing) => {
      if (err) {
        next(err);
      } else {
        res.json(listing);
      }
    });
  },
    
  getListingById(req, res, next) {
    ListingModel.findOne({ id: req.params.id }, (err, listing) => {
      if (err) {
        next(err);
      } else {
        res.json(listing)
      }
    });
  },

  getAllListings(req, res, next) {
    ListingModel.find(function (err, listings) {
      if (err) {
        next(err);
      } else {
        res.json(listings);
      }
    });
  },

  archiveListing(req, res, next) {
    ListingModel.findOne({ id: req.params.id }, (err, listing) => {
      if (err) {
        next(err);
      } else {
        listing.archived = true;
        listing.save();
      }
    });
  }

}
