import TextInput from "./textInput";

export default function InputList({inputs, handleChange}) {
  return (
    <>
      {inputs.map((input) => {
        return (
          <TextInput
            key={input.name}
            inputName={input.name}
            label={input.label}
            handleChange={handleChange}
          ></TextInput>
        );
      })}
    </>
  );
}
