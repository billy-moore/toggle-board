import React, { useContext } from 'react'
import { Badge, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core'
import { BoxContext } from '../HOCs/boxContext'

import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add';
import Dark from '@material-ui/icons/Brightness4'
import Light from '@material-ui/icons/Brightness5'

const ToggleBar = (props) => {

    const [boxState, setBoxState] = useContext(BoxContext)

    const handleChange = (e) => {
        setBoxState({type: 'darkTheme'})
    };

    const clickOffHandler = () => {
        setBoxState({type: 'nightTip'})
    }

    return (
        <Toolbar color='primary'>
                <Typography variant='h6' className={props.title}>
                    Toggle Bar
                </Typography>
                    <Tooltip
                        PopperProps = {{
                            disablePortal: true,
                        }}
                        onClose = {clickOffHandler}
                        open = {boxState.darkSuggest}
                        title="Just use this!"
                        arrow
                        placement='left'
                    >
                        <IconButton
                            onClick={e => handleChange(e)}
                            type = 'button'
                            name = 'darkTheme'
                        >
                            {boxState.darkMode ? <Light /> : <Dark />}
                        </IconButton>
                    </Tooltip>
                <IconButton >
                    <Badge>
                        <AddIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit' aria-label='toggle'>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
    )
}

export default ToggleBar
