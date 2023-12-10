const express = require('express');
const axios = require('axios');
const app = express();
const port = 5001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/send-request', async (req, res) => {
    try {
        // Simulate sending a request to the iOS app
        // iOS app would need to be set up to receive requests and send responses
        const iosResponse = await axios.post('https://38be127a-f702-4fae-af22-a3961e3eabf6.mock.pstmn.io/send-request', req.body);

        // Forward the response from the iOS app to the React frontend
        res.json(iosResponse.data);
    } catch (error) {
        console.error('Error contacting iOS app:', error);
        res.status(500).send('Error contacting iOS app');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
