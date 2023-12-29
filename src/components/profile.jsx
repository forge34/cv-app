import { useState } from "react";
import "../styles/profile-section.css";
import "../styles/popup.css";

export default function ProfileSection() {
  const [visibile, setVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState("Placeholder name");
  const [job, setJob] = useState("Placeholder job");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ipsum molestias repellat eius officiis, repudiandae possimus nemo ab, aliquam ex quaerat, quam quas inventore cume"
  );

  function show() {
    if (!visibile) setVisible(true);
    setIsDisabled(true);
  }

  function submit(e) {
    setName(e.name);
    setBio(e.bio);
    setJob(e.job);
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

        <h1 className="name">{name}</h1>
        <h3 className="job">{job}</h3>
        <p className="bio">{bio} </p>
      </div>

      <div className="btn-container">
        <button className="edit-btn">Save</button>
        <button className="edit-btn">Save as</button>
        <button className="edit-btn">Share link</button>
      </div>
    </div>
  );
}
