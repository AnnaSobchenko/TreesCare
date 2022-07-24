import * as Yup from "yup";

export const TreeValidationSchema = Yup.object().shape({
  // radius: Yup.number()
  //   .required("Fill the gap")
  //   .max(20, "Max 20")
  //   .positive()
  //   .integer(),
  // age: Yup.number()
  //   .required("Fill the gap")
  //   .positive()
  //   .integer()
  //   .max(200, "Max 200"),
  radius: Yup.string().required("Fill the gap").max(20, "Max 20"),
  age: Yup.string()
    .required("Fill the gap")
    .min(0, "Enter more than 1 characters")
    .max(100, "Max 100"),
  // kindOfTree: Yup.string().required("Select the gap"),
  // location: Yup.object({
  //   lat: Yup.string(),
  //   lng: Yup.string(),
  // }).required("Select the gap"),

  // location: Yup.object({
  //   lat: Yup.string(),
  //   lng: Yup.string(),
  // }).required("Select the gap"),
});
