import { NavLink, Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import HomePage from "../components/HomePage";
import UserAuthModal from "./modals/UserAuthModal.jsx";
import EmployerAuthModal from "./modals/EmployerAuthModal.jsx";
import { MenuItem } from "@mantine/core";
import { Grid } from "@mui/material";

export default function Layout({ children }) {
  const [value, setValue] = React.useState(0);

  return (
    <Grid item xs={false} sm={4} md={"center"}>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <UserAuthModal />
          <EmployerAuthModal />
        </BottomNavigation>

        {children}
      </Box>
    </Grid>
  );
}
