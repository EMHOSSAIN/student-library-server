const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0.ah4ac9g.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const libraryCollectionData = client.db('libraryData').collection('user');

        app.post('/user', async (req, res) => {
            const user = req.body;
             const result = await libraryCollectionData.insertOne(user)
            res.send(result)
        })




    }
    finally {

    }

}
run().catch(error => console.log(error))




app.get('/', (req, res) => {
    res.send('student library sarver is going on')
})



app.listen(port, () => {
    console.log(`port is going on ${port}`)
})