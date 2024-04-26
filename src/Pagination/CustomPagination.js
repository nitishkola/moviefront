import React from 'react';
import { Pagination, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import config from '../../config';
const customTheme = createTheme({
  palette: {
    primary:{
      main: '#ffffff'
    }
    
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={customTheme}>
        <Pagination
          count={numOfPages}
          color='primary'
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
