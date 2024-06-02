import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicInputField = ({ id, label, variant, name, value, onChange }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        variant={variant}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default BasicInputField;
