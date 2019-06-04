const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    if (val.length > 0) valid = false;
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    if (val === null) valid = false;
  });

  // validate when one field is fill and other is disabled
  if (rest.disable === true && rest.folderName) {
    valid = true;
  }

  return valid;
};

const formValidation = (name, value, formErrors) => {
  switch (name) {
    case "folderName":
      formErrors.folderName =
        value.length < 4 ? "Minimum 5 characaters required" : "";
      break;
    case "folderId":
      formErrors.folderId = value === "default" ? "Folder is required" : "";
      break;
    case "noticeName":
      formErrors.noticeName =
        value.length < 4 ? "Minimum 5 characaters required" : "";
      break;
    case "tags":
      formErrors.tags = value.length < 3 ? "tags are required" : "";
      break;
    case "description":
      formErrors.description =
        value.length < 5 ? "description is required" : "";
      break;
    default:
      break;
  }
};

export { formValid, formValidation };
