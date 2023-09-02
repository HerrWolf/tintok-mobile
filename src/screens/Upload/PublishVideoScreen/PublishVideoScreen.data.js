import * as Yup from "yup";

export const initialValues = (videoUri) => {
  return {
    videoUri,
    desciption: "",
    imageUri: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    videoUri: Yup.string().required("Es obligatorio"),
    description: Yup.string().required("Es obligatorio"),
    imageUri: Yup.string().required("Es obligatorio"),
  });
};
