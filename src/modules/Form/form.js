import React from "react";
import BasicForm from "./BasicForm";
import Horizontal from "./Horizontal Form";
import FloatingLabel from "./Floating Label";
import FileInput from "./File Input";
import Select from "./Select";
import CheckForm from "./Check, Radio & Switch";
import InputGroup from "./Input Group";
import Sizing from "./Sizing";
function Form() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <BasicForm />
          <Horizontal />
          <FloatingLabel />
          <FileInput />
          <Select />
          <CheckForm />
          <InputGroup />
          <Sizing />
        </div>
      </div>
    </>
  );
}

export default Form;
