import { useState } from "react";
import "../styles/job.css";
import Modal from "./modal";
import TextInput from "./textInput";

export default function Job({ name, title, from, to }) {
  const [btnState, setBtnState] = useState({ visible: false, disabled: false });
  const [jobData , setJobData] = useState({})

  function handleEdit() {
    setBtnState({
      visible: true,
      disabled: true,
    });
  }

  function submit() {
    setBtnState({
      visible: false,
      disabled: false,
    });
  }

  return (
    <div className="job">
      <button
        className="editjob-btn"
        onClick={handleEdit}
        disabled={btnState.disabled}
      >
        {" "}
        Edit
      </button>

      <Modal visibile={btnState.visible} submit={submit}>
        <TextInput label="Company Name" inputName="name"></TextInput>
        <TextInput label="Job title" inputName="title"></TextInput>

        <label htmlFor="from">From </label>
        <input type="date" id="from" name="from"></input>

        <label htmlFor="to">To</label>
        <input type="date" id="to" name="to"></input>
      </Modal>

      <h3>Company name : {name} </h3>
      <h3>Job title : {title}</h3>
      <h3>From : {from}</h3>
      <h3>To: {to}</h3>
    </div>
  );
}
