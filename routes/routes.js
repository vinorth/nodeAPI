const ValuesCtrl = require('../controllers/values_controller');
const UserCtrl = require('../controllers/users_controller');
const ListingCtrl = require('../controllers/listings_controller')

module.exports = function (app) {
    app
     .get('/test/:id', ValuesCtrl.readValue)
     .get('/tests', ValuesCtrl.readValues)
     .post('/test', ValuesCtrl.createValue)
     .post('/tests', ValuesCtrl.createValues)
     .put('/test', ValuesCtrl.updateValue)
     .delete('/test/:id', ValuesCtrl.deleteValue)

     .get('/users', UserCtrl.getAllUsers)
     .post('/user', UserCtrl.createUser)
     .put('/user', UserCtrl.updateUser)
     .get('/user/:id', UserCtrl.getUserById)
     .delete('/user/:id', UserCtrl.archiveUser)

     .get('/listings', ListingCtrl.getAllListings)
     .post('/listing', ListingCtrl.createListing)
     .put('/listing', ListingCtrl.updateListing)
     .get('/listing/:id', ListingCtrl.getListingById)
     .delete('/listing/:id', ListingCtrl.archiveListing)
};
