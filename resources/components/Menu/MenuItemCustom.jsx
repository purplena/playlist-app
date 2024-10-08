import React from 'react';
import { MenuItem } from '@mui/material';
import Link from '../Layout/Link';

const MenuItemCustom = ({ path = '', menuItem, onClickHandler, ...props }) => {
  return (
    <>
      <MenuItem
        component={Link}
        underline="none"
        to={path}
        onClick={onClickHandler}
        sx={{
          color: (theme) => theme.palette.text.primary,
          '&:hover': {
            backgroundColor: 'transparent',
            color: (theme) => theme.palette.text.primary,
          },
        }}
        {...props}
      >
        {menuItem}
      </MenuItem>
    </>
  );
};
export default MenuItemCustom;
