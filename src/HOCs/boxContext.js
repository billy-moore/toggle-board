import React, { useReducer, createContext } from 'react'
import { createMuiTheme } from '@material-ui/core'
import { indigo, lightBlue, pink, green, grey} from '@material-ui/core/colors'

export const BoxContext = createContext()

const starterTheme = createMuiTheme({
    palette: {
        primary: {
            main: grey[500],
        },
        secondary: {
            main: grey[800],
        },
    },
});

const initialState = {
    toggleOne: false,
    checkedB: true,
    watermelon: false,
    blue: false,
    darkMode: false,
    theme: starterTheme,
    darkSuggest: false,
    formCheckOne: false,
    formCheckTwo: false,
    formCheckThree: false,
}

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
})

const watermelonTheme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: pink[500],
        },
    },
});

const blueTheme = createMuiTheme({
  palette: {
    primary: {
        main: indigo[500]
    },
    secondary: {
      main: lightBlue[500],
    },
  },
});


const reducer = (state, action) => {
    switch(action.type) {
        case 'checkA':
            return {
                ...state,
                toggleOne: !state.toggleOne,
            }
        case 'darkTheme':
            return {
                ...state,
                darkMode: !state.darkMode,
                theme: state.darkMode ? starterTheme : darkTheme 
            }
        case 'watermelon':
            return {
                ...state,
                theme: watermelonTheme
            }
        case 'blue':
            return {
                ...state,
                theme: blueTheme
            }
        case 'nightTip':
            return {
                ...state,
                darkSuggest: false,
            }
        case 'nightNotice':
            return {
                ...state,
                darkSuggest: true,
            }
        case 'switchNumberOne' : 
            return {
                ...state,
                formCheckOne: !state.formCheckOne,
        }
        case 'switchNumberTwo' : 
            return {
                ...state,
                formCheckTwo: !state.formCheckTwo,
        }
        default: 
            return state
    }
}

export const BoxProvider = props => {
    const [ boxState, setBoxState ] = useReducer(reducer, initialState)


    return (
        <BoxContext.Provider value = { [ boxState, setBoxState ]}>
            {props.children}
        </BoxContext.Provider>
    )
}