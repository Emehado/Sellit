import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState();
  const [loading, setloading] = useState(true);

  const request = async () => {
    setHasError(false);
    setloading(true);
    const response = await apiFunc();
    setloading(false);

    if (!response.ok) return setHasError(true);

    setHasError(false);
    setData(response.data);
  };
  return { request, hasError, data, loading };
};
