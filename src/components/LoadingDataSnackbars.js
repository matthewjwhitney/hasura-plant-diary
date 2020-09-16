import React, { useState, useEffect } from "react";
import usePrevious from "../utils/usePrevious";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const LoadingDataSnackbars = ({ loading, data, error }) => {
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  const previousLoading = usePrevious(loading);
  useEffect(() => {
    if (!loading && loading !== previousLoading && data) {
      setSuccessSnackbarOpen(true);
    }
  }, [loading, previousLoading, data]);
  if (Boolean(loading))
    return (
      <Snackbar open={Boolean(loading)}>
        <Alert severity="info">Fetching data</Alert>
      </Snackbar>
    );
  if (successSnackbarOpen)
    return (
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackbarOpen(false)}
      >
        <Alert severity="success">Data fetched successfully</Alert>
      </Snackbar>
    );
  if (Boolean(error))
    return (
      <Snackbar open={Boolean(error)} autoHideDuration={6000}>
        <Alert severity="error">{error.message}</Alert>
      </Snackbar>
    );
  return <></>;
};

export default LoadingDataSnackbars;
