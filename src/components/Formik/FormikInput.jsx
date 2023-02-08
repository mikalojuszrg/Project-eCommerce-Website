import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";

const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Input} {...rest} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
