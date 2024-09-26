import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { emojisList } from "../constants/constants";

import Navbar from "./Navbar";
import WinOrLoseCard from "./WinOrLoseCard";

const EmojiGame = () => {
  const [topScore, setTopScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const score = clickedIds.length;

  const shuffledEmojisList = [...emojisList].sort(() => Math.random() - 0.5);

  const handleEmojiClick = (id) => {
    if (clickedIds.includes(id)) {
      setIsGameOver(true);
    } else {
      setClickedIds((prevState) => [...prevState, id]);
      if (clickedIds.length + 1 === emojisList.length) {
        setIsGameOver(true);
      }
    }
  };

  const handlePlayAgain = () => {
    if (score > topScore) {
      setTopScore(score);
    }
    setIsGameOver(false);
    setClickedIds([]);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%)",
        minHeight: "100vh", 
      }}
    >
      <Navbar score={score} topScore={topScore} isGameOver={isGameOver} />
      <Container
        sx={{
          minHeight: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingY: { xs: "7rem", md: "6rem" },
        }}
      >
        {isGameOver ? (
          <WinOrLoseCard score={score} handlePlayAgain={handlePlayAgain} />
        ) : (
          <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Grid container spacing={4} justifyContent="center">
              {shuffledEmojisList.map(({ id, emojiName, emojiUrl }) => (
                <Grid item xs={6} sm={4} md={3} key={id}>
                  <Card
                    sx={{
                      maxWidth: 150,
                      margin: "auto",
                      textAlign: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    <CardActionArea onClick={() => handleEmojiClick(id)}>
                      <CardMedia
                        component="img"
                        image={emojiUrl}
                        alt={emojiName}
                        sx={{
                          width: "100%",
                          height: "100px",
                          objectFit: "contain",
                          border: "2px solid #ffffff33",
                          borderRadius: "16px",
                          paddingY: "12px",
                        }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EmojiGame;