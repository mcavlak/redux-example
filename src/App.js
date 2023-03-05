import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2c3e50",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "1rem",
            boxShadow: "rgba(149, 157, 165, 0.15) 0px 8px 24px;",
            backgroundColor: "#fff",
            "&:hover": {
              boxShadow: "rgba(44, 62, 80, .3) 0px 8px 24px;",
            },
          },
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            padding: "1rem 1rem 0",
            boxSizing: "border-box",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: ".75rem",
            padding: ".5rem 1rem",
          },
        },
      },
    },
  });

  let element = useRoutes([
    { path: "/", element: <ProductList /> },
    { path: "/product/:productId", element: <ProductDetail /> },
    { path: "*", element: <div>Not found</div> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {element}
    </ThemeProvider>
  );
}

export default App;
