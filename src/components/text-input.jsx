export default function TextInput({ text ,inputName , handleChange}) {
  return (
    <>
      <label>
        {text}
        <input type="text" name={inputName} onChange={handleChange}></input>
      </label>
    </>
  );
}
