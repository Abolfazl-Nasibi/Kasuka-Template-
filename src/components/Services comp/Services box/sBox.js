import './sBox.css'
import servicesIcon from '../../../images/service.png'

function SBox(props){
    return <div className="sbox-main">
        <div className="s-icon">
            <img src={servicesIcon} alt="" />
        </div>
        <span className="s-title">
            {props.title}
        </span>
        <p className="s-des">
            {props.des}
        </p>
    </div>
}

export default SBox