import React from 'react'
import { TextField } from 'material-ui'


export const renderTextField = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={placeholder}
    floatingLabelText={label}
    floatingLabelFixed={true}
    style={{width: 200, marginRight: 30}}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

