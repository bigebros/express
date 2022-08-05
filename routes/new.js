const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res, next ) => {
    res.render( 'form', { title: 'Create a New Message' } );
});

module.exports = router;