import React from "react";
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        color:"white",
       justifyContent: "center",
        margin: "1rem 0",
        padding:"1rem 0",
        marginBottom: "110px"
       
      }}
    >
      
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          style={{background:"#5271ff" ,  borderRadius:"20rem", padding: "0 1rem" }}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}