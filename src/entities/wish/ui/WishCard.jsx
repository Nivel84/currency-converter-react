import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

export const WishCard = (props) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, minWidth: 250 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {`Цена: ${props.initialPrice}`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {props.priceInfo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
