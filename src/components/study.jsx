import { useState } from "react";

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

    setJobData({
      school: data.get("school"),
      studyname: data.get("studyname"),
      date: data.get("date"),
    });

    setBtnState({
      visible: false,
      disabled: false,
    });
  }

  

  return <div></div>;
}
