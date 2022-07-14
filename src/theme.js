import { Platform } from "react-native"

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586869',
        primary: '#0366d6',
        white: '#fefefe'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        //main: 'System'
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    appBar: {
        primary: '#24292e',        
        textSecondary: '#999',
        textPrimary: '#fff'
    }
}

export default theme