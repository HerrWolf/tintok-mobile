import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("No es un email valido")
      .required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });
};
