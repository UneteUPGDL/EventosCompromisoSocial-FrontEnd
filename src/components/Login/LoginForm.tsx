import "./LoginForm.scss"

//* Tools
import { useState, FormEvent } from "react"

//* Components
import TextInput from '../Form/TextInput/TextInput'

function LoginForm(): JSX.Element {
    const [formInformation, setFormInformation] = useState({
        username: "",
        password: ""
    })

    /**
     * Updates the username property of the formInformation useSate
     * @param username new username to change
     */
    const setUsername = (username: string) => {
        let currentPassword = formInformation.password;
        setFormInformation({
            username,
            password: currentPassword
        })
    }

    /**
     * Updates the password property of the formInformation useState
     * @param password new poassword to change
     */
    const setPassword = (password: string) => {
        let currentUsername = formInformation.username;
        setFormInformation({
            username: currentUsername,
            password
        })
    }

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        console.log(formInformation);
    }

    return (
        <form onSubmit={handleSubmit} className="LoginForm">
            <h1 className="LoginForm-title">Iniciar Sesión</h1>
            <TextInput type="text" label="Usuario" name="username" placeholder="John Gaeta" updateState={setUsername} />
            <TextInput type="password" label="Contraseña" name="password" placeholder="BulletTime Matrix" updateState={setPassword} />
            <button className="LoginForm-button" type="submit">Ingresar</button>
        </form>
    )
}

export default LoginForm;