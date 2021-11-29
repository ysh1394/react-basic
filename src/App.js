import "./App.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@mui/styles";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/theme";
import { makeStyles } from "@mui/styles";
import Contents from "./Components/Contents";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import LifeCycle from "./Pages/LifeCycle";
import Hooks from "./Pages/Hooks";

const App = (props) => {
  const muiTheme = createTheme();
  const useStyles = makeStyles((theme) => ({
    background: theme.palette.primary.main,
  }));

  const Component = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
  };
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={muiTheme}>
          {/* <CssBaseline /> */}
          <GlobalStyle />

          <Component {...props}>
            <Header />
            <Contents>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/life-cycle' element={<LifeCycle />} />
                <Route path='/hooks' element={<Hooks />} />
              </Routes>
            </Contents>
          </Component>
        </ThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default App;
