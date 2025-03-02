import './fBox.css'

function FBox(props){
    return <div className='fbox-main'>
        <div className="fbox-details">
            <span>{props.title}</span>
            <p>{props.des}</p>
        </div>

    </div>
}

export default FBox