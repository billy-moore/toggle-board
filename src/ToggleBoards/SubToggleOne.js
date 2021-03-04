import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'

import { BoxContext } from '../HOCs/boxContext'

const SubToggleOne = () => {
    
    const [, setBoxState] = useContext(BoxContext)

    const buttonClickHandler = (event) => {
        setBoxState({type: event}) 
    }

    return (
        <Grid item container spacing={1} xs = {6} justify='center'>
        
        {['watermelon', 'blue', 'nightNotice'].map((x, i) => (
            <Grid item key={x}>
                <Button
                    color = {['primary', 'secondary', 'default'][i]}
                    variant = 'contained'
                    onClick = { (e) => buttonClickHandler(x) }
                    >
                        {['Change Theme 1', 'Change Theme 2', 'Night Mode'][i]}
                    </Button>
            </Grid>
        ))}
        
    </Grid>
    )
}

export default SubToggleOne
