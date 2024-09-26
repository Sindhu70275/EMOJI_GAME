import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = ({ score, topScore, isGameOver }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ justifyContent: "center", marginBottom: "4rem" }}
    >
      <Grid item xs={12}>
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            paddingX: { xs: "2rem", md: "6.5rem" },
            background: "linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%)",
          }}
        >
          <Container maxWidth="none">
            <Toolbar disableGutters>
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Emoji Game
              </Typography>
              {!isGameOver && (
                <Stack
                  sx={{ marginLeft: "auto", flexDirection: "row", gap: "1rem" }}
                >
                  <Typography>Score: {score}</Typography>
                  <Typography>Top Score: {topScore}</Typography>
                </Stack>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Grid>
  );
};

Navbar.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default Navbar;