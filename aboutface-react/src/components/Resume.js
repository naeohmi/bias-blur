import React, {Component} from 'react'
// import FileInput from 'react-file-input'

export default class Resume extends Component {
    constructor() {
        super()

        this.state = {
            path: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({path: e.target.value})
        console.log("TARGET", e.target.value)
    }

    render() {
        return (
            <div>
                <form>
                 <input type="file" name="fileupload"  onChange={this.handleChange} id="fileupload"/> <label > Select a file to upload</label> 
                    <input type="submit" value="Submit"/>
                </form>

                
            </div>
        )
    }
}