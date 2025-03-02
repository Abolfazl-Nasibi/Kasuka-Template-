import './slider.css'
import client1 from '../../images/client-1.png'
import client2 from '../../images/client-2.png'
import client3 from '../../images/client-7.png'
import client4 from '../../images/client-4.png'
import client5 from '../../images/client-5.png'
import client6 from '../../images/client-8.png'

function Slider(){
    return <div className='slider-main'>
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
        <img src={client5} alt="" />
        <img src={client6} alt="" />
    </div>
}

export default Slider