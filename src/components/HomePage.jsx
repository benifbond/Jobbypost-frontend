import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mantine/core";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function SignInSide({ children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid>
        <h1></h1>
      </Grid>
    </div>
  );
}
