import { extendTheme } from '@chakra-ui/react'
import colors from '../styles/colors.module.scss'

const theme = extendTheme({
  fonts: {
    heading: "'Konnect Extra Bold', sans-serif",
    body: "'Poppins', sans-serif"
  },

  colors: {
    green: colors.green,
    darkGreen: colors.darkGreen,

    white: colors.white,

    darkGray: colors.darkGray,
    black: colors.black,

    pink: colors.pink,
    darkPink: colors.darkPink,
    darkestPink: colors.darkestPink
  },
  styles: {
    global: {
      body: {
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
        color: 'white',

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '50px',
          borderBottom: '5px solid',
          borderColor: 'green'
        }
      },
      variants: {
        'site-title': {
          lineHeight: '0.9em',
          '&::after': {
            content: undefined,
            width: 0
          }
        },
        'page-title': {
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
