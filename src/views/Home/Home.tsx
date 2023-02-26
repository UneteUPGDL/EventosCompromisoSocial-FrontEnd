import "./Home.scss"

//* Tools
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName } from "../../slices/user";

//* Components
import Navbar from "../../components/Navbar/Navbar";


function Home(): JSX.Element {
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="Home">
            <Navbar />
            <h1>Home</h1>
            <p>{user.firstName}</p>
            <button className="secondaryButton" onClick={() => dispatch(setFirstName("hello world"))}>Change Name</button>
        </div>
    )
}

export default Home;