import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mantine/core";

const theme = createTheme();

export default function SignInSide({ children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid>
      <h1>hello</h1>
    </Grid>
  );
}
