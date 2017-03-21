import React, {Component} from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.bindSaveHandler = this.saveHandler.bind(this);
    }

    saveHandler(e) {
        const {saveDescription} = this.props;
        const textarea = this.textarea;
        if (e.target !== textarea) {
            saveDescription('description', textarea.value);
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.bindSaveHandler, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.bindSaveHandler, false);
    }

    render() {
        const {value} = this.props;
        return <textarea ref={(el) => this.textarea = el} defaultValue={value} maxLength="50"/>;
    }
}

export default TextArea;