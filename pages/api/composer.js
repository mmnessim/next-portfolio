const database = require('../../combined.json');

const composerFinder = (composer) => {
    let resultsArray = [];
    for (let i = 0; i < database.data.length; i++) {
        if (database.data[i].composer === composer) {
            resultsArray.push(database.data[i])
        }
    }
    return resultsArray;
}

export default function Handler(req, res) {
    const composer = req.query.composer;
    let result = composerFinder(composer);
    if (result.length === 0) {
        res.send({'message': 'No results found'})
    }
    res.send(result);
}