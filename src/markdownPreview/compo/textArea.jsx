import React from 'react'
class TextArea extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <textarea
                name="textarea"
                style={this.props.style}
                className={this.props.className}
                onChange={this.props.handleInput}
                value={this.props.state.text}
            />
        )
    }
}

export default TextArea;
