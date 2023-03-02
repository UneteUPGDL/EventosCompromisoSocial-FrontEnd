import "./LoginForm.scss"

//* Tools
import { useState, FormEvent } from "react"
import { LogUserIn, LoginResponse } from "../../API/usersAPI"
import { useSelector, useDispatch } from "react-redux"

//* Components
import TextInput from '../Form/TextInput/TextInput'
import { setFirstName, setUsername, toggleLogin } from "../../slices/user"

function LoginForm(): JSX.Element {

    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState("")
    const [formInformation, setFormInformation] = useState({
        username: "",
        password: ""
    })

    /**
     * Updates the username property of the formInformation useSate
     * @param username new username to change
     */
    const setUsername = (username: string) => {
        setFormInformation({ ...formInformation, username });
    }

    /**
     * Updates the password property of the formInformation useState
     * @param password new poassword to change
     */
    const setPassword = (password: string) => {
        setFormInformation({ ...formInformation, password })
    }

    /**
     * Function that sends the form information to validation, and handle the response
     * @param evt Submit Event
     * @returns 
     */
    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault();


        const response: LoginResponse = await LogUserIn(formInformation);
        console.log(response);

        if (response.error) {
            setErrorMessage(response.error)
            return;
        }

        const { username } = response.data;
        dispatch(toggleLogin());
    }

    return (
        <form onSubmit={handleSubmit} className="LoginForm">
            <h1 className="LoginForm-title">Iniciar Sesión</h1>
            <TextInput type="text" label="Usuario" name="username" placeholder="John Gaeta" updateState={setUsername} />
            <TextInput type="password" label="Contraseña" name="password" placeholder="BulletTime Matrix" updateState={setPassword} />
            <p className="LoginForm-error-text">{errorMessage}</p>
            <button className="LoginForm-button" type="submit">Ingresar</button>
        </form>
    )
}

export default LoginForm;