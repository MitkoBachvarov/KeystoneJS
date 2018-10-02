let keystone = require('keystone');
let Event = keystone.List('Event');

module.exports = function (req, res) {
    if(!req.body.name || !req.body.startTime || !req.body.endTime){
        return res.sendError('incomplete data set');
    }

    let newEvent = new Event (req.body);
    Event.updateItem(newEvent, req.body, function (error) {
        res.locals.enquirySubmitted = true;
        if(error) res.locals.saveError = true;
        res.render('addEvent');
    });
};


