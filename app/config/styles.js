import {Platform} from 'react-native'
import colors from './colors'

export default{
    colors,
    text:{
        color: colors.dark,
        flex:1,
        fontSize:18,
        fontFamily: Platform.OS === 'android'? "Roboto":"Anenir"


        }
    }

