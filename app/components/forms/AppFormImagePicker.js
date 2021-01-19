import React from "react";
import { useFormikContext } from "formik";

import ImageList from "../ImageList";
import ErrorMessage from "./ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  return (
    <>
      <ImageList
        data={imageUris}
        onAdd={(uri) => setFieldValue(name, [uri, ...imageUris])}
        onRemove={(imageuri) =>
          setFieldValue(
            name,
            imageUris.filter((image) => image !== imageuri)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
