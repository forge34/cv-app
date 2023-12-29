import "../styles/popup.css";
import { useState } from "react";

export default function Modal({ visibile, submit, children }) {
  return (
    visibile && (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(e);
        }}
      >
        <div className="popup">
          {children}
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    )
  );
}
