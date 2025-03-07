//importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();


// importo le funzioni del controller
const postController = require('../controllers/postController');


//rotta CRUD dei post
// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// destroy
router.delete('/:id', postController.destroy);

// store
router.post('/', postController.store);



// update
router.put('/:id', postController.update);




// esporto router
module.exports = router;