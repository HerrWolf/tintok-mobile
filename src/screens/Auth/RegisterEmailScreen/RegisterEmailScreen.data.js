import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    first_name: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("No es un email valido")
      .required("Campo obligatorio"),
    first_name: Yup.string().required("Campo obligatorio"),
    username: Yup.string()
      .required("Campo obligatorio")
      .noSpacing("El username no puede contener espacios"),
    password: Yup.string().required("Campo obligatorio"),
    repeatPassword: Yup.string()
      .required("Campo obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
};
