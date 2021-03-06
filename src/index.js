const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my awesome Node app' }));

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => res.status(404).json({ message: 'The resource you are requesting for is not found' }));

app.listen(port, () => console.log(`App started on port ${port}`));