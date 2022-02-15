/**
 * IMPORTS
 */
import 'animate.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import { RoutesLoader } from "routes";


/**
 * I am a main App component
 */
export function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ReactNotification />
      <RoutesLoader />
      <GlobalStyle />
    </ThemeProvider >

  )
}
