import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "'Konnect Extra Bold', sans-serif",
    body: "'Poppins', sans-serif"
  },

  colors: {
    green: {
      //lossmeril green
      primary: '#48bf84'
    },
    mono: {
      //lossmeril white
      white: '#f4f4f4',

      //lossmeril gray
      darkGray: '#1e1e1e',

      //lossmeril gray darker
      black: '#120b0d'
    }
  },

  styles: {
    global: {
      body: {
        bg: 'mono.darkGray',
        bgGradient: 'linear(to-br, mono.darkGray, mono.black)',
        height: '100vh'
      }
    }
  },

  components: {
    Text: {
      baseStyle: {
        fontSize: '11.5pt',
        paddingBottom: '8pt'
      }
    },
    Heading: {
      baseStyle: {
        textTransform: 'lowercase',
        position: 'relative',
        paddingBottom: '8pt',
        marginBottom: '14pt',

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '50px',
          borderBottom: '5px solid',
          borderColor: 'green.primary'
        }
      },
      variants: {
        'site-title': {
          fontSize: '3em',

          '&::after': {
            width: '85px',
            borderBottom: '7px solid'
          }
        },
        'card-title': {
          fontSize: '1.75em'
        }
      }
    }
  }
})

export default theme
