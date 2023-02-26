import "./Dashboard.scss"

//* Tools
import { useSelector } from "react-redux";
import { Redirect } from "wouter";

//*
import Navbar from "../../components/Navbar/Navbar";

function Dashboard(): JSX.Element {
    const user = useSelector((state: any) => state.user);

    //if the user is not logged then send it to the login page
    if (!user.loggedIn) return <Redirect to="login" />;
    return (
        <div className="Dashboard">
            <Navbar />
        </div>
    )
}

export default Dashboard;