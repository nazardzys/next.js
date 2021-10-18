import MeetupDetailComponent from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetail({ meetupData: { image, title, address, description }}) {
    return <MeetupDetailComponent
        image={image}
        title={title}
        address={address}
        description={description}
    />;
};

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb://admin:admin@localhost:27017/mongodb?authSource=admin');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(({ _id }) => ({
            params: {
                meetupId: _id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const client = await MongoClient.connect('mongodb://admin:admin@localhost:27017/mongodb?authSource=admin');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetupId = context.params.meetupId;

    const meetupData = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    const { _id, ...rest } = meetupData;

    client.close();
    return {
        props: {
            meetupData: {
                ...rest,
                id: _id.toString()
            }
        }
    }
}