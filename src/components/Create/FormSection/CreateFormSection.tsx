import "./CreateFormSection.scss"

//* Components
import TextInput from "../../Form/TextInput/TextInput";
import { TextInputOptions } from "../../Form/TextInput/TextInput";

interface CreateFormSectionParams {
    title: string,
    fields: TextInputOptions[]
}
function CreateFormSection(props: CreateFormSectionParams): JSX.Element {
    const { title, fields } = props;

    const createField = (field: TextInputOptions) => {
        return <TextInput {...field} />
    }
    return (
        <div className="CreateFormSection">
            <h2 className="CreateFormSection-title">{title}</h2>
            {fields.map(field => createField(field))}
        </div>
    )
}

export default CreateFormSection; 