import "./Login.scss"

//* Tools
import { useSelector } from "react-redux"
import { Redirect } from "wouter";

//* Components
import LoginForm from "../../components/Login/LoginForm";
import Navbar from "../../components/Navbar/Navbar";

function Login(): JSX.Element {
    const user = useSelector((state: any) => state.user);

    //if the user is logged then send it to the dashboard
    if (user.loggedIn) return <Redirect to="dashboard" />;

    return (

        <div className="Login">
            <Navbar />
            <LoginForm />
        </div>
    )
}

export default Login;