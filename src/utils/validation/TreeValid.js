import * as Yup from "yup";

export const TreeValidationSchema = Yup.object().shape({
  radius: Yup.string().required("Select the gap"),
  age: Yup.string().required("Select the gap"),
  kindOfTree: Yup.string().required("Select the gap"),
  condition: Yup.string().required("Select the gap"),
  registrationNumber: Yup.string()
    .required("Select the gap")
    .min(5, "Enter more than 5 characters")
    .max(20, "Max 20"),
  location: Yup.object({
    lat: Yup.string(),
    lng: Yup.string(),
  }).required("Select the gap"),
});
