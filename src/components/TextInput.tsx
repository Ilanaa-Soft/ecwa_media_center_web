import { TextField, Box, MenuItem, TextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";

type TextInputProps = {
  options?: Options[];
} & TextFieldProps;

type Options = {
  value: string;
  label: string;
};

const TextInput = (props: TextInputProps) => {
  const { name = "", select, options, ...otherProps } = props;

  const {
    errors,
    touched,
    handleChange,
    setFieldTouched,
  } = useFormikContext<any>();

  const hasError = errors[name] && touched[name] ? true : false;

  return (
    <>
      {!select ? (
        <TextField
          name={name}
          error={hasError}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          {...otherProps}
        />
      ) : (
        <TextField
          select
          name={name}
          error={hasError}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          {...otherProps}
        >
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
      {hasError && (
        <Box sx={{ color: "#d32f2f" }} mt="4px">
          <>{errors[name]}</>
        </Box>
      )}
    </>
  );
};

export default TextInput;
