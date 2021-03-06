import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';

import InputComponent from './Input';
import TextareaComponent from './Textarea';



class Input extends PureComponent {
    static propTypes = {
        tagName: PropTypes.oneOf(['input', 'textarea'])
    }
    static defaultProps = {
        tagName: "input",
        className: '',
        invalid: false,
    }


    initInputRef = el => this.input = el
    focus = () => this.input.focus()
    blur = () => this.input.blur()


    render() {
        const {
            classes,
            className: classNameProp,
            disabled,
            invalid,
            theme, // eslint-disable-line
            sheet, // eslint-disable-line
            tagName,
            secondary,
            ...rest
        } = this.props;


        const Component = tagName === "textarea"
            ? TextareaComponent
            : InputComponent;


        const className = cn(
            classes.root,
            {
                [classes.input]: tagName !== "textarea",
                [classes.textarea]: tagName === "textarea",
                [classes.invalid]: invalid,
                [classes.disabled]: disabled,
                [classes.primary]: !secondary,
                [classes.secondary]: secondary,
            },
            classNameProp
        )


        return (
            <Component
                inputRef={this.initInputRef}
                className={className}
                {...rest}
            />
        )
    }
}


export default injectSheet(styles)(Input);