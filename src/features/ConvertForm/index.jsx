import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CurrencySelector } from "./CurrencySelector";

export const ConvertForm = ({ currencyList, onSubmit, buttonLabel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <TextField
          {...register("countCurrency", { required: true })}
          label="Сумма"
          type="number"
          error={errors["countCurrency"]}
          helperText={errors["countCurrency"] ? "Обязательное поле" : ""}
        />
        <CurrencySelector
          register={{ ...register("from") }}
          label="Из"
          currencyList={currencyList}
        />
        <CurrencySelector
          register={{ ...register("to") }}
          label="В"
          currencyList={currencyList}
        />

        <Button variant="outlined" type="submit">
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};
