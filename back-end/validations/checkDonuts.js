const checkJolt, checkFeature = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: 'This is required'});
    }
};

module.exports = {checkJolt, checkFeature };