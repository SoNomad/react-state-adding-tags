import { useState } from "react";
import InputForm from "./Input";
import Tag from "./Tag";

function FormInput() {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState(["First Tag"]);
  const [inputDirty, setInputDirty] = useState(false);
  const [error, setError] = useState("Text can not be empty");

  const textHandler = (e) => {
    setValue(e.target.value);
    setInputDirty(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
    setTags([...tags, value]);
  };

  const removeHandler = (id) => {
    const newTags = [...tags].filter((newTag, index) => index !== id);
    return setTags(newTags);
  };

  const blurHandler = (e) => {
    if (!e.target.value) {
      setInputDirty(true);
    }
  };

  return (
    <>
      <InputForm
        textHandler={textHandler}
        submitHandler={submitHandler}
        blurHandler={blurHandler}
        inputDirty={inputDirty}
        error={error}
        value={value}
      />
      <Tag removeHandler={removeHandler} tags={tags} />
    </>
  );
}

export default FormInput;
