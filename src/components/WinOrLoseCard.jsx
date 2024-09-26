import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WinOrLoseCard = ({ score, handlePlayAgain }) => {
  const isWon = score === 12;

  const onPlayAgain = () => {
    handlePlayAgain();
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1000px" }}
      >
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: 600, marginBottom: "1rem", color: "#ffffff" }}
            >
              You {isWon ? "Won" : "Lost"}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "0.5rem", color: "#ffffff" }}
            >
              {isWon ? "Best Score" : "Score"}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, marginBottom: "2rem", color: "#6a59ff" }}
            >
              {score}/12
            </Typography>
            <Button
              variant="contained"
              color="#0D0D0D"
              onClick={onPlayAgain}
              sx={{
                marginBottom: "2rem",
                backgroundColor: "#ffce27",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              Play Again
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Card
            sx={{
              maxWidth: 400,
              margin: "0 auto",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <CardMedia
              component="img"
              image={
                isWon
                  ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              }
              alt={isWon ? "Won" : "Lost"}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

WinOrLoseCard.propTypes = {
  handlePlayAgain: PropTypes.func,
  score: PropTypes.number,
};

export default WinOrLoseCard;