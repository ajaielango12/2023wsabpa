import { extendTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";



const theme = extendTheme({
  styles: {
    global: {
      "html body": {
        fontSize: "12px",
        fontFamily: 'Roboto',
        textAlign: 'Left',
        
        
      },
      a: { textDecoration: "none", _hover: { color: '#0000FF' } },
    },

    flex: {
    display: 'flex',
    flexDirection: 'column',
    items: 'center',
    },
box1: {
    color: 'white',
    marginTop: '100px',
    border: '5px' ,
    borderRadius: '10px',
    padding: '20px',
    borderColor: '#008080',
},

boxtitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
},

textbox: {
    textAlign: 'center',
},

  },

});

export default theme;
