import React from "react";
import SelectField from 'material-ui/SelectField';

export const renderSelectField = ({
  input,
  label,
  placeholder,
  children,
  meta: { touched, error },
  ...custom
}) => (
<SelectField
    floatingLabelText={label}
    floatingLabelFixed={true}
    hintText={placeholder}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
  />
);
