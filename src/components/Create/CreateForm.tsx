import "./CreateForm.scss"


//* Tools
import { MouseEvent } from "react";
import { formatDate } from "../../utils/Dates";

//*Components
import CreateFormSection from "./FormSection/CreateFormSection";
import { TextInputOptions } from "../Form/TextInput/TextInput";
import { useState } from "react";


interface sectionProperties {
    sections: {
        title: string,
        fileds: TextInputOptions[]
    }[]
}

function CreateForm(): JSX.Element {
    const [currentPanel, setCurrrentPanel] = useState(0);

    const SECTIONS: sectionProperties = {
        sections: [
            {
                title: "Infomación General",
                fileds: [
                    {
                        name: "eventTitle",
                        label: "Título del evento",
                        type: "text",
                        placeholder: "Día del Autismo"
                    },

                    {
                        name: "eventLocation",
                        label: "Lugar del evento",
                        type: "text",
                        placeholder: "Poliforum Panamericano"
                    },
                    {
                        name: "eventDescription",
                        label: "Descripción del evento",
                        type: "text",
                        placeholder: "Evento que busca concientizar a los alumnos sobre el autismo"
                    },
                ]
            },
            {
                title: "Horario",
                fileds: [
                    {
                        name: "eventDate",
                        label: "Fecha del evento",
                        type: "date",
                    },
                    {
                        name: "eventStartTime",
                        label: "Hora de inicio de ",
                        type: "time",
                    },
                    {
                        name: "eventEndTime",
                        label: "Hora de fin",
                        type: "time",
                    },
                ]
            },
            {
                title: "Configuración de espacios",
                fileds: [
                    {
                        name: "eventSpaceDuration",
                        label: "Duracion de espacios (min)",
                        type: "number",
                        placeholder: "15"
                    },
                    {
                        name: "eventSpaceCapacity",
                        label: "Capacidad maxima de registros",
                        type: "number",
                        placeholder: "100",
                    },
                ]
            }
        ]
    }

    const TOTAL_PANELS = SECTIONS.sections.length;
    const panelCSSVarialbe = { "--currentPanel": currentPanel, "--totalPanels": TOTAL_PANELS } as React.CSSProperties;


    const nextButtonAction = (button: HTMLButtonElement) => {
        let currentIndex = currentPanel;
        if (currentPanel >= TOTAL_PANELS - 1) return;
        setCurrrentPanel(++currentIndex);
    }

    const prevButtonAction = (button: HTMLButtonElement) => {
        let currentIndex = currentPanel;
        if (currentPanel <= 0) return;
        setCurrrentPanel(--currentIndex);
    }
    /**
     * Function that handles the click on the buttons. 
     * @param evt 
     * @param action function that will execute on click
     */
    const buttonHandler = (evt: MouseEvent, action: Function) => {
        evt.preventDefault();
        action(evt.target);
    }

    return (
        <form className="CreateForm">
            <h1 className="CreateForm-title">Crear Evento</h1>
            <div className="CreateForm-sectionFrame">
                <div className="CreateForm-sectionsContainer" style={panelCSSVarialbe}>
                    {SECTIONS.sections.map(section => {
                        return <CreateFormSection title={section.title} fields={section.fileds} />
                    })}
                </div>
            </div>
            <div className="CreateForm-buttons">
                <button className="CreateForm-button secondaryButton" onClick={e => buttonHandler(e, prevButtonAction)} disabled={(currentPanel == 0)}>Atras</button>
                <button className="CreateForm-button" onClick={e => buttonHandler(e, nextButtonAction)}>{currentPanel + 1 == TOTAL_PANELS ? "Crear" : "Siguiente"}</button>
            </div>

        </form >
    );
}

export default CreateForm;