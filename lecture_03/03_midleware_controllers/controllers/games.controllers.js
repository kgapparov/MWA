module.exports.getAll = function(req, res) {
    console.log("Get All controller called");
    res.status(200).json("{'JSON DATA': 'GET'}");
}