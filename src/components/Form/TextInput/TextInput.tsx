import { ChangeEvent } from "react";
import "./TextInput.scss";

/**
 * @interface TextInputOptions 
 * @property {string} type what type of input will be: text, password or email
 * @property {string} name the name that will be assign to the input field
 * @property {string} label the text that will appear above the input field
 * @property {string | null} placeholder the placeholder of the input field
 * @property {function | null} updateState function to send the value of input on change event
 */
interface TextInputOptions {
    type: string,
    name: string,
    label: string,
    placeholder?: string,
    updateState?: Function
}

/**
 * 
 * @param {TextInputOptions} options 
 * @returns A Group of JSX Elemnts including a label and an Input wraped in a div
 */
function TextInput(options: TextInputOptions): JSX.Element {
    const { type, name, label, placeholder, updateState } = options;

    const handleInput = (evt: ChangeEvent) => {
        evt.preventDefault();
        if (!updateState) return;
        const target: HTMLInputElement = evt.target as HTMLInputElement;
        updateState(target.value);
    }

    return (
        <div className="TextInput">
            <label className="TextInput-label">{label}</label>
            <input className="TextInput-input" type={type} placeholder={placeholder ?? ""} name={name} onChange={handleInput} autoComplete="on" />
        </div >
    )
}

export default TextInput;

