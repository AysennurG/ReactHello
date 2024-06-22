import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const KimlikNo = () => {
  

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
        label="PersonalId"
       // value="phoneNumber"
        variant="outlined"
        margin="normal"
       fullWidth
       type='personalId'
      />
    </Box>
  );
};

export default KimlikNo;
