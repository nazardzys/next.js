import MeetupDetailComponent from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../index";

export default function MeetupDetail() {
    return <MeetupDetailComponent
        image="https://source.unsplash.com/user"
        title="A First Meetup"
        address="some address"
        description="A first meetup description"
    />;
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: DUMMY_MEETUPS.map(({ id: meetupId }) => ({
            params: {
                meetupId
            }
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            meetupData: {

            }
        }
    }
}