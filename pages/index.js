import Head from "next/head";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../components/MenuAppBar";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Container fixed maxWidth="1440px">
        <Stack direction="row" spacing={2}>
          <Navigation />
          <Grid container spacing={4} >
            <Grid item xs={12} md={4}>
            </Grid>
          </Grid>
        </Stack>
      </Container>

    </Box>
  );
}
