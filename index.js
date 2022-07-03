const express = require('express')
const app = express()
const port = 5566

const getColors = require('get-image-colors')


app.get('/', async (req, res) => {

    try {
        const url = req.query.url;
        if (url) {
            colors = await getColors(url);
            res.send(colors);
        } else {
            res.send('No url, try to use : xxx?url=yourImageUrl');
        }
    } catch (error) {
        throw error;
    }

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})