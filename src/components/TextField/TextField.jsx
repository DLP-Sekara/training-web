import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
      
      style={props.style}
    >
      <TextField id="standard-basic" style={props.style2} hintText={props.hintText} label={props.placeHolder} onClick={props.onClick} value={props.value} onChange={props.onChange} variant="standard" />
    </Box>
  );
}
