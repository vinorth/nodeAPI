const ListingModel = require('../models/listing');
const helper = require('../helper');

module.exports = {

  createListing(req, res, next) {
    var listing = new ListingModel(req.body);
    listing.id = helper.createGuidId();

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
    ListingModel.find({ archived: { $ne: true } }, function (err, listings) {
      if (err) {
        next(err);
      } else {
        listings = listings.map(listing => ({ 
          id: listing._id,
          userId: listing.userId,
          title: listing.title,
          description: listing.description,
          iconUrl: listing.iconUrl,
          username: listing.username,
          rating: listing.rating,
          distance: listing.distance,
          archived: listing.archived
         }))

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
