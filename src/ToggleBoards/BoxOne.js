import React from 'react'

import { Card, Toolbar, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '400px',
        backgroundColor: theme.palette.primary.main,
    }
}))

const BoxOne = () => {

    const classes = useStyles()
    
    return (
            <Card variant = 'outlined' className = {classes.root}>
                <Toolbar>
                    <Typography variant = 'h6'>Box One</Typography>
                </Toolbar> 
            </Card>
    )
}

export default BoxOne
