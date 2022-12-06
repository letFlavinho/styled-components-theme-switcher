import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme, {darkThemeColors} from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
}
`
const Button = styled.button`
  font-size: 1.5em;
  margin: 2rem;
  border: 1px solid #FFF;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const darkTheme = {
...theme,
colors: {
  ...theme.colors,
  ...darkThemeColors
}
}



function App() {

  const [activeTheme, setActiveTheme] = useState(theme)

  function handleTheme(){
    if(activeTheme === theme){
      setActiveTheme(darkTheme)
    }else{
      setActiveTheme(theme)
    }
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle/>
    <div className="App">
     <Title>Hello World!</Title>
      <Button>fILHO  da puta</Button>
      <Button onClick={handleTheme}>Mudar Tema</Button>
    </div>
     </ThemeProvider>
  )
}

export default App
