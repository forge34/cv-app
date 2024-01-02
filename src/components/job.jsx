import { useState } from "react";
import "../styles/job.css";
import Modal from "./modal";
import TextInput from "./textInput";

export default function Job({ name, title, from, to }) {
  const [btnState, setBtnState] = useState({ visible: false, disabled: false });
  const [jobData, setJobData] = useState({
    name: name,
    title: title,
    from: from,
    to: to,
  });

  function handleEdit() {
    setBtnState({
      visible: true,
      disabled: true,
    });
  }

  function submit(e) {
    const data = new FormData(e.target)

    setJobData({
      name: data.get("name"),
      title: data.get("title"),
      from: data.get("from"),
      to: data.get("to"),
    });

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

      <h3>Company name : {jobData.name} </h3>
      <h3>Job title : {jobData.title}</h3>
      <h3>From : {jobData.from}</h3>
      <h3>To: {jobData.to}</h3>
    </div>
  );
}
