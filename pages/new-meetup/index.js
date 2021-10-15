import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const addMeetupHandler = enteredMeetupData => {
    console.log(enteredMeetupData)
};

export default function NewMeetup() {
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}