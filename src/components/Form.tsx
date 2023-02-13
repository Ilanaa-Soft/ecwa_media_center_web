import * as React from "react";
import { Box } from "@mui/material";
import { Formik, Form as FormikForm } from "formik";

type FormProps = {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: React.ReactNode;
};

const Form = (props: FormProps) => {
  const { initialValues, onSubmit, validationSchema, children } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Box component={FormikForm} noValidate autoComplete="off" width="100%">
          <>{children}</>
        </Box>
      )}
    </Formik>
  );
};

export default Form;
