import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TelefonNo = () => {
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <TextField
        label="PhoneNumber"
       // value="phoneNumber"
        variant="outlined"
        margin="normal"
       fullWidth
       type='tel'
      />
    </Box>
  );
};

export default TelefonNo;
