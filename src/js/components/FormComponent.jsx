import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Form from './Form.jsx';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'name': 'caifanglin',
            'age': 18,
            'motto': '一份耕耘一份收获'
        }

        this.changeAttr = this.changeAttr.bind(this);
    }

    changeAttr(attributes, newVal) {
        switch (attributes) {
            case "name":
                this.setState({
                    "name": newVal
                })
                break;
            case "age":
                newVal = Number(newVal) || 0;
                this.setState({
                    "age": newVal
                })
                break;
            case "motto":
                this.setState({
                    "motto": newVal
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <section>
                name: {this.state.name}
                <br/>
                age: {this.state.age}
                <br/>
                motto: {this.state.motto}
                <Form {...this.state} funcs={this.changeAttr}/>
            </section>
        )
    }
}

export default FormComponent;