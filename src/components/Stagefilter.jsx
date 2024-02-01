import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getStagesCounts } from '../ApiHandler';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({ handleChange, stageName }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    getStagesCounts().then(data => {
      const names = data.map(item => item.sourceTopicName);
        setNames(names);
    }).catch(error => {
      console.error('Error in MultipleSelect: ', error);
    })
  }, []);

  return (
    <div>
      <FormControl sx={{ marginY: "2rem", width: "100%" }}>
        <InputLabel id="demo-multiple-name-label">Stage Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={stageName}
          onChange={handleChange}
          input={<OutlinedInput label="Stage Name" />}
          MenuProps={MenuProps}
        >
          {
          names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
