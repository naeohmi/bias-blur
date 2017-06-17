import React, {Component} from 'react'
import axios from 'axios'

export default class Resume extends Component {
    constructor() {
        super()

        this.state = {
            path: "", 
            html: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({path: e.target.value})
        console.log("TARGET", e.target.value)
    }

    handleClick(e) {
        e.preventDefault()
        axios.post("http://localhost:3001/convert", {path: this.state.path.substring(12)})
        .then(res => this.setState({html: res.data}))
        .catch(console.error)
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div>
                <div>
                <form>
                 <input type="file" name="fileupload"  onChange={this.handleChange} id="fileupload"/> <label > Select a file to upload</label> 
                    <input type="submit" onClick={this.handleClick} value="Submit"/>
                </form>
                </div>
                <div>
                    {this.state.html ? <div dangerouslySetInnerHTML={{ __html: this.state.html }} /> : null}
                </div>
            </div>
        )
    }
}