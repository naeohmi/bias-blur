import React, { Component } from 'react'
import axios from 'axios'

export default class Resume extends Component {
    constructor() {
        super()

        this.state = {
            path: "",
            html: "",
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ path: e.target.value })
        console.log("TARGET", e.target.value)
    }

    handleClick(e) {
        e.preventDefault()

        axios.all([
            axios.post("http://localhost:3001/convert", { path: this.state.path.substring(12) }),
            axios.post("http://localhost:3001/name", { path: this.state.path.substring(12) })
        ])
            .then(axios.spread((html, name) => {
                this.setState({ html: html.data, name: name.data }, () => {
                    var pTags = document.getElementsByTagName('p')
                    var aTags = document.body.getElementsByTagName('a')
                    var first = this.state.name.split(" ")[0] //first name
                    var last = this.state.name.split(" ")[1] //last name

                    for (var i = 0; i < pTags.length; i++) {
                        if (pTags[i].innerText.includes(this.state.name || "@")) {
                            pTags[i].innerText = "Candidate Name"
                        }
                    }
                    //trying to get it to hide the email, linkedin, etc. 
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].innerText.includes(first.toLowerCase())) {
                            aTags[i].innerText = "Candidate"
                        }
                    }
                })
            }))
            .catch(console.error)
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div className="container">
                <div>
                    <form>
                        <input type="file" name="fileupload" onChange={this.handleChange} id="fileupload" /> <label > Select a file to upload</label>
                        <input type="submit" onClick={this.handleClick} value="Submit" />
                    </form>
                </div>
                <div>
                    {this.state.html ? <div dangerouslySetInnerHTML={{ __html: this.state.html }} /> : null}
                </div>
            </div>
        )
    }
}