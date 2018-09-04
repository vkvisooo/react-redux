import React, { Fragment } from 'react';
import "./app.scss";
import { Link } from 'react-router-dom';
import { StatelessComponent } from '../components/Stateless';


class Form extends React.Component {
    constructor(props) {
        console.log("constructor")
        super();
        this.state = {
            fields: {
                firstname: '',
                lastname: '',
                age: '',
            },
            errors: {}
        }
        this.array = [];
    };

    formValidation(fields, field, type) {
        let errors = this.state.errors;
        let formisValid = true;
        if (type == "text") {
            if (fields[field].match(/[^a-zA-Z]+$/)) {
                formisValid = false;
                errors[field] = "Only Letters";
            }
            else {
                delete errors[field];
            }
        }
        else {
            if (fields[field].match(/[^1-90]+$/)) {
                formisValid = false;
                errors[field] = "Only Numbers";
            }
            else {
                delete errors[field];
            }
        }
        this.setState({
            errors: errors
        })
        return formisValid;

    }

    change(field, type, e) {
        let fields = { ...this.state.fields };
        fields[field] = e.target.value;
        let check = this.formValidation(fields, field, type);
        if (check) {
            this.setState({
                fields: fields
            })
        }
    }

    blur(event) {
    }
    click() {
        var errors = {};
        for (let field in this.state.fields) {
            if (this.state.fields[field] === "") {
                errors[field] = `${field} is required field`;
            }
        }
        this.setState({
            errors: errors
        }, () => {
            if (Object.keys(this.state.errors).length == 0) {
                console.log("we have no errors we can proceed further")
                console.log(this.state.fields)
            };
        }
        )
    }

    render() {
        console.log("render")

        // console.log(this.state)
        return (
            <div className="background">

                <form >
                    <div className="form-group">
                        <label>First Name:</label><br />
                        <input
                            className="form-controls"
                            type="text"
                            onBlur={(e) => this.blur(e)}
                            onChange={(e) => this.change('firstname', 'text', e)}
                            required value={this.state.fields.firstname} />
                        {this.state.errors.firstname ? <div className="error-message">
                            <p>{this.state.errors.firstname}</p>
                        </div> : null}

                    </div>


                    <div className="form-group">
                        <label>Last Name:</label><br />
                        <input
                            className="form-controls"
                            type="text"
                            ref={(name) => this.lastname = name} value={this.state.firstname} onBlur={(e) => this.blur(e)} onChange={(e) => this.change('lastname', 'text', e)}
                            value={this.state.fields.lastname} />
                        {this.state.errors.lastname ? <div className="error-message">
                            <p>{this.state.errors.lastname}</p>
                        </div> : null}
                    </div>
                    <div className="form-group">
                        <label>Age:</label><br />
                        <input
                            className="form-controls"
                            type="text"
                            onChange={(e) => this.change('age', 'number', e)}
                            value={this.state.fields.age}
                            ref={(name) => this.age = name} />
                        {this.state.errors.age ? <div className="error-message">
                            <p>{this.state.errors.age}</p>
                        </div> : null}

                    </div>
                    <button type="button" className="btn btn-primary" onBlur={(e) => this.blur(e)} onClick={() => this.click()}>CLick ME</button>
                </form>

                <StatelessComponent name={'StatelessComponent'} />
                <Link to={'/'}>Landing</Link>
            </div >
        )
    }
}

export default Form;

