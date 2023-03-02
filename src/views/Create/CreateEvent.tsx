import "./CreateEvent.scss"

//* Tools
import { useSelector } from "react-redux";
import { Redirect } from "wouter";


//* Components
import Navbar from "../../components/Navbar/Navbar";
import CreateForm from "../../components/Create/CreateForm"

function CreateEvent(): JSX.Element {
    const user = useSelector((state: any) => state.user);



    //if the user is not logged then send it to the login page
    if (!user.loggedIn) {
        //check in the session storage
        const dataString: string | null = sessionStorage.getItem("UserInfoECS");
        if (!dataString) return <Redirect to="login" />;

        //check that are valid data in the session storage
        const data = JSON.parse(dataString);
        if (data.username == undefined || data.password == undefined) return <Redirect to="login" />;
        if (data.username == '' || data.password == '') return <Redirect to="login" />;
    }

    return (
        <div className="CreateEvent">
            <Navbar />
            <CreateForm />
        </div>
    )
}

export default CreateEvent;