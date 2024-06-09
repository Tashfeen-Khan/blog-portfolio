import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicInputField = ({ label, name, onChange, value }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)':
       {m: 1, 
        width: 500,
        maxWidth: '100%',}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth
        id="fullWidth" 
        label={label} 
        variant="outlined" 
        name={name} 
        onChange={onChange} 
        value={value}
      />
    </Box>
  );
}

export default BasicInputField;
