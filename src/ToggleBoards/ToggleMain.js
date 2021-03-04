
import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Collapse, Grid, Switch, Typography } from '@material-ui/core'

import { BoxContext } from '../HOCs/boxContext'

import ToggleBar from './ToggleBar'
import SubToggleOne from './SubToggleOne'
import SubToggleTwo from './SubToggleTwo'


const useStyles = makeStyles({
    root: {
        width: '400px',
    },
    title: {
        flexGrow: 1,
    },
    buttonOne: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10px',
    },
    subToggles: {
        display: 'flex,',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    leftToggle: {
        width: '50%',
    },
    rightToggle: {
        width: '50%',
    },

})

const ToggleMain = () => {

    const classes = useStyles();

    const [boxState, setBoxState] = useContext(BoxContext)
    
    const handleChange = (event) => {
        setBoxState({type: event.target.name});
    };

    return (
        <Card className = {classes.root} variant='outlined'>
            <ToggleBar 
                title = {classes.title}
            />
            <Grid container direction='row' className = {classes.buttonOne}>
            <Typography>Less Options</Typography>
            <Switch 
                checked={boxState.checkedA}
                onClick={handleChange}
                name="checkA"
                color="default"
            />
            <Typography>More Options</Typography>
            </Grid>
            <Collapse 
                in={boxState.toggleOne} 
                timeout="auto" 
                unmountOnExit
                >
        <CardContent>
            <Grid
                container
                direction = 'row'
                className = { classes.subToggles }
                spacing = {1}
                >
                    <SubToggleOne />
                    <SubToggleTwo />
                </Grid>
        </CardContent>
    </Collapse>
    </Card>
    )
}

export default ToggleMain
