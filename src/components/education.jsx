import { useState } from "react";
import "../styles/education.css"
import Modal from "./modal";
import TextInput from "./textInput";

export default function EductionSection(params) {
      const [btnState, setBtnState] = useState({
        visible: false,
        disabled: false,
      });

      function handleEdit() {
        setBtnState({
          visible: true,
          disabled: true,
        });
      }

      function submit(e) {
        const data = new FormData(e.target);

        setBtnState({
          visible: false,
          disabled: false,
        });
      }

      return <div className="education-section">
        <h1>Education</h1>
        <button className="addedu-btn" disabled={btnState.disabled} onClick={handleEdit}> Add education</button>

        <Modal visibile={btnState.visible} submit={submit}>
            <TextInput label="School name"></TextInput>
            <TextInput label="Title of study"></TextInput>

            <label htmlFor="date">Date of study</label>
            <input id="date" type="date"></input>
        </Modal>


      </div>
}