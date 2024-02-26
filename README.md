# ImageColorAPI

ImageColorAPI is a simple API that extracts primary, secondary, and tertiary colors from images. It provides a straightforward way to integrate color extraction functionality into your applications.

## How to Use

To use ImageColorAPI, send a GET request to the following endpoint:


Replace `yourImageUrl` with the URL of the image from which you want to extract colors.

### Example

```javascript
const imageUrl = 'https://example.com/image.jpg';

fetch(`https://image-color-api.vercel.app/api?url=${imageUrl}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```


## How to Use
The API returns a JSON object containing primary, secondary, and tertiary colors along with their RGB and hexadecimal representations.

### Example Response:

```json
{
  "primary": {
    "rgb": "255,255,255",
    "hex": "#FFFFFF"
  },
  "secondary": {
    "rgb": "0,0,0",
    "hex": "#000000"
  },
  "tertiary": {
    "rgb": "128,128,128",
    "hex": "#808080"
  }
}
```


### Dependencies

- **express**: Web framework for Node.js
- **get-image-colors**: Library for extracting colors from images

### Running Locally

1. Clone the repository: `git clone https://github.com/your-username/image-color-api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

By default, the server will listen on port 5566. You can customize the port using the `PORT` environment variable.

