import { MongoClient } from "mongodb";

// api/new-meetup

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb://admin:admin@localhost:27017/mongodb?authSource=admin');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        try {
            const result = await meetupsCollection.insertOne(data);
            console.log(result)
        }   catch (e) {
            console.log(e, '------------')
        }

        client.close();

        res.status(201).json({ message: 'Meetup inserted' });
    }
}