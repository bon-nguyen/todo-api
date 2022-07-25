import React, {FC} from 'react';
import { ThemeProvider } from "styled-components";


interface ThemeProps {
    children: React.ReactNode,
}

const theme = {
    colors: {
      primary: "#D61C4E",
      secondary: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
}
// const theme = {
//     main: "mediumseagreen"
//   };
const Theme:FC <ThemeProps> = ({children})=> {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )

}

export default Theme;