const database = require('../../combined.json');

const levelFinder = (level) => {
    let resultsArray = [];
    for (let i = 0; i < database.data.length; i ++) {
        if (database.data[i].level === level) {
         resultsArray.push(database.data[i]);   
        }
    }
    return resultsArray;
}

export default function Handler(req, res) {
    const level = req.query.level;
    let result = levelFinder(level);
    if (result.length === 0) {
        res.send('No results found')
    }
    res.send(result)
}