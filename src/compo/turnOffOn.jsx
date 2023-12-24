import './turnOffOn.css'

function TurnOffOn(props) {
    return (
        <div className="toggle-div" >
            <h3>{props.title}</h3>
            <div className='toggle' onClick={props.handleClick}><span className='toggle-btn' style={props.style}></span></div>
        </div>
    )
}

export default TurnOffOn