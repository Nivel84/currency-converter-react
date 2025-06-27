import { MenuItem, TextField } from "@mui/material";

export const CurrencySelector = ({ label, currencyList, register }) => {
  return (
    <TextField
      {...register}
      label={label}
      select
      defaultValue={currencyList[0].value}
      sx={{ width: "100%" }}
    >
      {currencyList.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
