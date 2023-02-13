import { Button } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useFormikContext } from "formik";

type SubmitButtonProps = {
  text: string;
} & LoadingButtonProps;

const SubmittButton = (props: SubmitButtonProps) => {
  const { text, ...otherProps } = props;

  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type="submit"
      component={LoadingButton}
      loading={isSubmitting}
      {...otherProps}
    >
      {text}
    </Button>
  );
};

export default SubmittButton;
