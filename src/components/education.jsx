import { useState } from "react";
import "../styles/education.css";
import Modal from "./modal";
import TextInput from "./textInput";
import Study from "./study";

export default function EductionSection(params) {
  const [btnState, setBtnState] = useState({
    visible: false,
    disabled: false,
  });

  const [eduContainer, setEduContainer] = useState(new Array(0));

  function handleEdit() {
    setBtnState({
      visible: true,
      disabled: true,
    });
  }

  function submit(e) {
    const data = new FormData(e.target);
    console.log(data.get("sname"));

    setEduContainer([
      ...eduContainer,
      {
        school: data.get("school"),
        sn: data.get("sname"),
        date: data.get("date"),
      },
    ]);

    setBtnState({
      visible: false,
      disabled: false,
    });
  }

  return (
    <div className="education-section">
      <h1>Education</h1>
      <button
        className="addedu-btn"
        disabled={btnState.disabled}
        onClick={handleEdit}
      >
        {" "}
        Add education
      </button>

      <Modal visibile={btnState.visible} submit={submit}>
        <TextInput label="School name" inputName="school"></TextInput>
        <TextInput label="Title of study" inputName="sname"></TextInput>

        <label htmlFor="date">Date of study</label>
        <input id="date" type="date" name="date"></input>
      </Modal>

      {eduContainer.map((ele) => {
        return <Study key={ele.school} {...ele}></Study>;
      })}
    </div>
  );
}
