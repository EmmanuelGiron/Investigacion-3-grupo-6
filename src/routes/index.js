const {Router} = require('express');
const router = Router();

//routes
router.get('/test',(req, res) => {
    const data = {
        "name": "Timer",
        "Pagina" : "Puzzle"
    }
    res.json(data);
});

module.exports = router;