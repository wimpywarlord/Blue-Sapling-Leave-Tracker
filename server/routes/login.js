const router = require('express').Router();

router.post('/', (req, res) => {
	res.send('REGISTER');
});

module.exports = router;
