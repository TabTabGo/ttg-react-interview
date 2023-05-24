import React from 'react';

import { Box, CircularProgress } from '@material-ui/core';

const LoadingPage = () => {
  return (
    <Box display="flex" height={300} width="100%" alignItems="center" justifyContent="center">
      <CircularProgress color="primary" />
    </Box>
  );
};

export default LoadingPage;
