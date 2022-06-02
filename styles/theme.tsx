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
        paddingBottom: '14pt',
        marginBottom: '14pt',
        color: 'white'
      },
      variants: {
        'section-title': {
          position: 'relative',

          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '100px',
            borderBottom: '10px solid',
            transform: 'translate(-50px)'
          }
        }
        //   'card-title': {
        //     fontSize: '1.75em'
        //   }
      }
    }
  }
})

export default theme
