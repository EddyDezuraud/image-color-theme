const express = require('express')
const app = express()
const port = process.env.PORT || 5566

const getColors = require('get-image-colors')

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


app.get('/api', async (req, res) => {

    try {
        const url = req.query.url;
        if (url) {
            response = await getColors(url);
            const json = await response.json();

            const child = { rgb: '', hex: '' };

            const colors = {
                primary: child,
                secondary: child,
                tertiary: child
            };

            for (var i = 0; i < json.length; i++) {
                if (i < 3) {
                    const key = Object.keys(ret)[i];
                    const rgbColor = JSON.stringify(json[i]._rgb);
                    colors[key].rbg = rgbColor.replace('[', '').replace(']', '');

                    const hexColor = rgbToHex(json[i]._rgb[0], json[i]._rgb[1], json[i]._rgb[2]);
                    colors[key].hex = hexColor;
                }
            }

            res.send(colors);
        } else {
            res.send('No url, try to use : ?url=yourImageUrl');
        }
    } catch (error) {
        throw error;
    }

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

module.exports = app;