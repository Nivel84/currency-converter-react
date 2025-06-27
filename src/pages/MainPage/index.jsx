import { Container } from "@mui/material";
import { CurrencyConverter } from "../../widgets/CurrencyConverter";
import { WishListWidget } from "../../widgets/WishListWidget";

export const MainPage = () => {
  return (
    <Container>
      <CurrencyConverter />
      <WishListWidget />
    </Container>
  );
};
