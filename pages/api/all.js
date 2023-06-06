const database = require('../../combined.json');

export default function Handler(req, res) {
    res.send({database})
}