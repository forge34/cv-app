import { useState } from "react";

export default function TextInput({
    label,
    inputName,
    textArea = false,
}) {
    const [value, setValue] = useState("");
    return (
        <>
            <label htmlFor={inputName}>{label}</label>
            {textArea ? (
                <textarea
                    value={value}
                    name={inputName}
                    id={inputName}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                ></textarea>
            ) : (
                <input
                    value={value}
                    name={inputName}
                    id={inputName}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                ></input>
            )}
        </>
    );
}
