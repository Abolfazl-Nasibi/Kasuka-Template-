import './statsbox.css'

function StatsBox(props){
    return <div className='statsbox-main'>
        <span>{props.number}</span>
        <p>{props.des}</p>
    </div>
}

export default StatsBox