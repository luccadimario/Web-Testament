import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {locationDNE} from '../App';
class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        function _RenderLocVer() {
            if(locationDNE) {
                console.log(locationDNE);
                return <h6>The page entered does not exist, please try again.</h6>;
            }
            return;
        }
        const RenderLocVer = _RenderLocVer.bind(this);
        return(
            <div><TextField
                helperText="Enter the number of the page you would like to visit"
                label="Page Number ex. 9"
                onChange={this.handleChange}/>
                <br/>
                <a
                href = {"/" + this.state.value}>
                    <Button 
                    variant="contained">
                        Take Me There
                    </Button>
                </a>
                <br/>
                <RenderLocVer/>
            </div>
        )
    }
    


}
export default InputField;