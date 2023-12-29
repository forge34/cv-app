import TextInput from "./text-input";
import "../styles/popup.css";
import { useState } from "react";

export default function Modal({ submit, visibility }) {
  const [myFormData, setFormData] = useState({ name: "", job: "", bio: "" });

  function handleChange(e) {
      const data = e.target;
     setFormData({...myFormData,[data.name]:data.value})
  }

  return (
    visibility && (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(myFormData);
          }}
        >
          <div className="popup">

            <TextInput
              text={"name"}
              inputName={"name"}
              handleChange={handleChange}
            ></TextInput>

            <TextInput
              text={"Job title"}
              inputName={"job"}
              handleChange={handleChange}
            ></TextInput>

            <label htmlFor="bio-area">Bio</label>

            <textarea
              id="bio-area"
              name="bio"
              onChange={handleChange}
            ></textarea>
            <button className="btn">Submit</button>
          </div>
        </form>
      </>
    )
  );
}
