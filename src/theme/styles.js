import { extendTheme } from "@chakra-ui/react";

const hometheme = extendTheme({
  styles: {
    flex: {
    display: 'flex',
    flexDirection: 'column',
    items: 'center',
    },
box1: {
    color: 'white',
    marginBottom: '20px',
    border:'5px',
    borderRadius: '10px',
    padding: '20px',
},
box2: {
    color: 'white',
    marginTop: '100px',
    border: '5px' ,
    borderRadius: '10px',
    padding: '20px',
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

export default hometheme;
