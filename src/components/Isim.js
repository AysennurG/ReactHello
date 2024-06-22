import React, { Component } from 'react'
import { Stack, TextField } from '@mui/material'

export default class isim extends Component {
  render() {
    return (
      
          <Stack spacing={6}>
          <Stack direction= 'row' spacing={2}>
          <TextField label = 'Name'></TextField>
          </Stack>
          
          </Stack>
          
    )
  }
}

