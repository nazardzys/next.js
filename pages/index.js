import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://source.unsplash.com/user/c_v_r',
        address: 'Some address, 5, 1235, City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://source.unsplash.com/user/c_v_r',
        address: 'Some address, 2, 1235, City',
        description: 'This is a second meetup'
    }

];

export default function Home({ meetups }) {
    // const [loadedMeetups, setLoadedMeetups] = useState();
    // useEffect(() => {
        // setLoadedMeetups(DUMMY_MEETUPS)
    // }, []);
    return <MeetupList meetups={meetups} />
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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}