const ValuesCtrl = require('../controllers/values_controller');
const UserCtrl = require('../controllers/users_controller');
const PostCtrl = require('../controllers/posts_controller')

module.exports = function (app) {
    app
     .get('/test/:id', ValuesCtrl.readValue)
     .get('/tests', ValuesCtrl.readValues)
     .post('/test', ValuesCtrl.createValue)
     .post('/tests', ValuesCtrl.createValues)
     .put('/test', ValuesCtrl.updateValue)
     .delete('/test/:id', ValuesCtrl.deleteValue)

     .post('/user', UserCtrl.createUser)
     .put('/user', UserCtrl.updateUser)
     .get('/users', UserCtrl.getAllUsers)
     .get('/user/:id', UserCtrl.getUserById)

     .post('/post', PostCtrl.createPost)
     .put('/post', PostCtrl.updatePost)
     .get('/posts', PostCtrl.getAllPosts)
     .get('/post/:id', PostCtrl.getPostById)
};
