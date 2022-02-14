import React from "react";
import BasicButton from "./BasicButton";
import OutlineButton from "./OutlineButtons";
import RoundedButton from "./RoundedButtons";
import ButtonSize from "./ButtonsSize";
import IconButton from "./IconButtons";
import IconButtonSize from "./IconButtonsSize";
import IconTextButton from './IconTextButtons'
import BlockButton from "./BlockButtons";
import BasicButttonGroup from "./BasicButtonGroup";
import MixedButtonGroup from "./MixedButtonGroup";
import OutlinedButtonGroup from "./OutlinedButtonGroup";
import CheckBoxButton from "./CheckboxButtonGroup";
import RadioButtons from "./RadioButtonGroup";
import ButtonToolbar from "./ButtonToolbar";
import VerticalButtton from "./VerticalButtonGroup";
import VerticalButtonCheckbox from "./VerticalButtonCheckbox";
function Buttons() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <BasicButton />
          <OutlineButton />
          <RoundedButton />
          <ButtonSize />
          <IconButton />
          <IconButtonSize />
          <IconTextButton />
          <BlockButton />
          <BasicButttonGroup />
          <MixedButtonGroup />
          <OutlinedButtonGroup />
          <CheckBoxButton />
          <RadioButtons />
          <ButtonToolbar />
          <VerticalButtton />
          <VerticalButtonCheckbox />
        </div>
      </div>
    </>
  );
}

export default Buttons;
