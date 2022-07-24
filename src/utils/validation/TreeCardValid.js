import * as Yup from "yup";

export const treeCardValidationSchema = Yup.object().shape({
  crownRadius: Yup.string()
    .required("Fill the gap")
    .crownRadius("Please enter crownRadius")
    .max(100, "Max 100"),
  treeAge: Yup.string()
    .required("Fill the gap")
    .min(1, "Enter more than 1 characters")
    .max(100, "Max 100"),
  kindOfTree: Yup.string()
    .required("Fill the gap")
    .kindOfTree("Please enter kindOfTree")
    .max(100, "Max 100"),
  conditionOfTheTree: Yup.string()
    .required("Fill the gap")
    .conditionOfTheTree("Please enter conditionOfTheTree")
    .max(250, "Max 250"),
  // registrationNumber: Yup.string()
  //   .required("Fill the gap")
  //   .conditionOfTheTree("Please enter registrationNumber")
  //   .min(1, "Enter more than 1 characters")
  //   .max(150, "Max 150"),
  descriptionOfNecessaryWorks: Yup.string()
    .required("Fill the gap")
    .conditionOfTheTree("Please enter description of necessary works")
    .min(3, "Enter more than 1 characters")
    .max(250, "Max 150"),
});
