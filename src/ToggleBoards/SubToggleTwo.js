import React, {useContext} from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid } from '@material-ui/core'

import { BoxContext } from '../HOCs/boxContext'

const SubToggleTwo = () => {
    const [boxState, setBoxState] = useContext(BoxContext)
    
    const handleChange = (event) => {
        setBoxState({type: 'switch' + event.target.name})
    }
    return (
        <Grid
            item
            xs={6}
            style = {{display: 'flex', justifyContent: 'center'}}
        >
        <FormControl>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={boxState.formCheckOne}
                                    onChange={handleChange} 
                                    name={'NumberOne'} 
                                    />}
                        label = 'Box One'
                    />
                <FormControlLabel
                    control={<Checkbox checked={boxState.formCheckTwo}
                                    onChange={handleChange} 
                                    name={'NumberTwo'} 
                                    />}
                        label = 'Box Two'
                    />
            </FormGroup>
        </FormControl>
        </Grid>
    )
}

export default SubToggleTwo
