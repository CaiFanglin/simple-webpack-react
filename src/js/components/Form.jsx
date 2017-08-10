import React from 'react';
import { render } from 'react-dom';
import { PropTypes } from 'prop-types';

import * as Index from '../index.js';
import '../../css/index.css'

let propTypes = {
    // items: PropTypes.object.isRequired,
    funcs: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    motto: PropTypes.string.isRequired
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.changeAttributesName = this.changeAttributesName.bind(this);
        this.changeAttributesAge = this.changeAttributesAge.bind(this);
        this.changeAttributesMotto = this.changeAttributesMotto.bind(this);
    }

    changeAttributesName() {
        this.props.funcs(
            "name",
            this.refs.name.value
        )
    }

    changeAttributesAge() {
        this.props.funcs(
            'age',
            this.refs.age.value
        )
    }

    changeAttributesMotto() {
        this.props.funcs(
            'motto',
            this.refs.motto.value
        )
    }

    render() {
        return (
            <section className="elegant-aero">
                <h1>Author:{Index.AUTHOR}</h1>
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="name"><span>name:</span></label>
                        <input type="text" className="form-control" name="name" ref="name" defaultValue={this.props.name} onChange={this.changeAttributesName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age"><span>age:</span></label>
                        <input type="text" className="form-control" name="age" ref="age" defaultValue={this.props.age} onChange={this.changeAttributesAge}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="motto"><span>motto:</span></label>
                        <input type="text" className="form-control" name="motto" ref="motto" defaultValue={this.props.motto} onChange={this.changeAttributesMotto}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default">确认</button>
                        <button className="btn btn-danger">取消</button>
                    </div>
                </form>
            </section>
        )
    }
}

Form.propTypes = propTypes;

export default Form;