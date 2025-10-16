import React from "react";
import Header from "../Component/Header";
import { Typography, Box, Grid } from "@mui/material";
import Profile from "./Component/Profile";
import Myprojects from "./Component/Myprojects";

function Dashboard() {
  return (
    <>
      <Header insideDashBoard />

      <Box sx={{ mt: 10, px: 4 }}>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* LEFT SIDE - PROFILE (pinned to far left) */}
          <Grid item xs={12} md={4} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start", // Aligns left edge
              }}
            >
              <Profile />
            </Box>
          </Grid>

          {/* RIGHT SIDE - WELCOME + PROJECTS */}
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                display: "center",
                flexDirection: "column",
                alignItems: "flex-start", // Align content to left inside the section
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 3 }}
              >
                WELCOME <span style={{ color: "#1976d2" }}>USER</span>
              </Typography>

              <Myprojects />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
