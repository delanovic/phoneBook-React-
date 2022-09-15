import React, { Component } from "react";
import ReactDom from 'react-dom'


class AddContact extends Component {
    /* */

    /* */
    state = {
        name: "",
        number: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.number === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", number: "" });
        console.log(this.state)
    }
    render() {
        return (

            <div className="modal">
                <div className="mode-wrapper">
                    <h2>Add Contact</h2>
                    <form action="" className="form" onSubmit={this.add}>
                        <div className="field">

                            <input type="text" name="name" placeholder="Unesi ime" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="field">

                            <input type="text" name="number" placeholder="Unesi broj" value={this.state.number} onChange={(e) => this.setState({ number: e.target.value })} />
                        </div>
                        <button className="submit">Add</button>     </form>

                </div>
            </div >



        );
    }


}

export default AddContact;