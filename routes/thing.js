const express = require('express');
const fs = require('fs');
const uniqid = require('uniqid');

const router = express.Router();

router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

const getAll = () => JSON.parse(fs.readFileSync('stor.json', 'utf8'));

router.get('/', (req, res) => {
    const data = getAll();
    res.send(data);
});

router.post('/', (req, res) => {
    const data = getAll();
    const id = uniqid();
    const thing = {
        id,
    };
    if (req.body.name) {
        for (const key in req.body) {
            thing[key] = req.body[key];
        }
        data.push(thing);
        fs.writeFile('stor.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            res.status(201).json(data);
        });
    } else {
        res.json({
            message: 'Введите имя',
        });
    }
});

router.put('/:id', (req, res) => {
    const data = getAll();
    const thing = data.find((think) => think.id === req.params.id);
    for (const key in req.body) {
        thing[key] = req.body[key];
    }
    fs.writeFile('stor.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        const data = getAll();
        res.json(data);
    });
});

router.delete('/:id', (req, res) => {
    let data = getAll();
    data = data.filter((thing) => thing.id !== req.params.id);
    fs.writeFile('stor.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        const data = getAll();
        res.json(data);
    });
});
module.exports = router;
