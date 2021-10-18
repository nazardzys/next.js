import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

export default function Home({ meetups }) {
    // const [loadedMeetups, setLoadedMeetups] = useState();
    // useEffect(() => {
        // setLoadedMeetups(DUMMY_MEETUPS)
    // }, []);
    return <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta
                name="description"
                content="lorem ipsum"
            />
        </Head>
        <MeetupList meetups={meetups} />
    </Fragment>;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb://admin:admin@localhost:27017/mongodb?authSource=admin');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(({_id, ...rest}) => ({
                ...rest,
                id: _id.toString()
            }))
        }
    }
}