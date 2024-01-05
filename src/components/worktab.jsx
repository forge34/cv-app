import { useState } from "react";
import "../styles/worktab.css";
import Modal from "./modal";
import TextInput from "./textInput";
import Job from "./job";

export default function WorkTab() {
  const [workContainer, setWorkContainer] = useState(new Array(0));
  const [visibile, setVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleAdd() {
    setVisible(true);
    setIsDisabled(true);
  }

  function submit(e) {
    const data = new FormData(e.target);

    const name = data.get("name");
    const title = data.get("title");
    const from = data.get("from");
    const to = data.get("to");

    setWorkContainer([
      ...workContainer,
      { name: name, title: title, from: from, to: to },
    ]);

    setVisible(false);
    setIsDisabled(false);
  }

  return (
    <div className="work-tab">
      <h1>Work Experience </h1>
      <button className="addwork-btn" onClick={handleAdd} disabled={isDisabled}>
        Add work experience
      </button>

      <Modal visibile={visibile} submit={submit}>
        <TextInput label="Company Name" inputName="name"></TextInput>
        <TextInput label="Job title" inputName="title"></TextInput>

        <label htmlFor="from">From </label>
        <input type="date" id="from" name="from"></input>

        <label htmlFor="to">To</label>
        <input type="date" id="to" name="to"></input>
      </Modal>

      {workContainer.map((e) => {
        return <Job key={e.name} {...e}></Job>;
      })}
    </div>
  );
}
