import React from "react";
import { MenuItem } from "@mui/material";
import Link from "../Layout/Link";

const MenuItemCustom = ({
    path = "",
    menuItem,
    menuItemColor = "primary",
    onClickHandler,
}) => {
    return (
        <>
            <MenuItem
                component={Link}
                underline="none"
                to={path}
                sx={{ color: menuItemColor }}
                onClick={onClickHandler}
            >
                {menuItem}
            </MenuItem>
        </>
    );
};
export default MenuItemCustom;
