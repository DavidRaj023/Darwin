const HTTPStatus = require('httpstatus');


exports.get = async(req, res) => {
    var status = new HTTPStatus(req.query.id);
    console.log(`Error: ${status.description}`);
    res.send(`<html> <title>${status.description}</title><body><h1 style="text-align:center;"> ${status.description}<p style="text-align:center;">${status.code}</p></h1></body></html>`);
};