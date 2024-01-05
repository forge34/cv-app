import { useState } from "react";
import Modal from "./modal";
import TextInput from "./textInput";

export default function Study({ school, sn, date }) {
  const [btnState, setBtnState] = useState({
    visible: false,
    disabled: false,
  });

  const [studyData, setStudyDate] = useState({
    school: school,
    studyname: sn,
    date: date,
  });

  function handleEdit() {
    setBtnState({
      visible: true,
      disabled: true,
    });
  }

  function submit(e) {
    const data = new FormData(e.target);

    console.log(data)

    setStudyDate({
      school: data.get("school"),
      studyname: data.get("studyname"),
      date: data.get("date"),
    });

    setBtnState({
      visible: false,
      disabled: false,
    });
  }

  return (
    <div>
      <button
        className="editjob-btn"
        onClick={handleEdit}
        disabled={btnState.disabled}
      >
        {" "}
        Edit
      </button>

      <Modal visibile={btnState.visible} submit={submit}>
        <TextInput label="School Name" inputName="school"></TextInput>
        <TextInput label="Study title" inputName="studyname"></TextInput>

        <label htmlFor="to">To</label>
        <input type="date" id="to" name="date"></input>
      </Modal>

      <h3>School name : {studyData.school}</h3>
      <h3>Study name : {studyData.studyname}</h3>
      <h3>Date : {studyData.date}</h3>
    </div>
  );
}
