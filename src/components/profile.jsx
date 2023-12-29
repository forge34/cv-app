import { useState } from "react";
import "../styles/profile-section.css";
import "../styles/popup.css";
import Modal from "./modal";
import TextInput from "./textInput";

export default function ProfileSection() {
  const [visibile, setVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fData, setFData] = useState({
    name: "Name",
    job: "Job title",
    bio: "bio",
  });

  function show() {
    if (!visibile) setVisible(true);
    setIsDisabled(true);
  }

  function submit(e) {
    const data = new FormData(e.target);
    const name = data.get("name");
    const job = data.get("job");
    const bio = data.get("bio");

    setFData({
      ["name"]: name,
      ["job"]: job,
      ["bio"]: bio,
    });
    setVisible(false);
    setIsDisabled(false);
  }

  return (
    <div className="profile-section">
      <div className="user"></div>

      <div className="info">
        <button onClick={show} disabled={isDisabled} className="edit-btn">
          Edit
        </button>

        <h1 className="name">{fData.name}</h1>
        <h3 className="job">{fData.job}</h3>
        <p className="bio">{fData.bio} </p>
      </div>

      <div className="btn-container">
        <button className="edit-btn">Save</button>
        <button className="edit-btn">Save as</button>
        <button className="edit-btn">Share link</button>
      </div>

      <Modal visibile={visibile} submit={submit}>
        <TextInput label="Full Name" inputName="name"></TextInput>
        <TextInput label="Job title" inputName="job"></TextInput>
        <TextInput label="Bio" inputName="bio" textArea={true}></TextInput>
      </Modal>
    </div>
  );
}
