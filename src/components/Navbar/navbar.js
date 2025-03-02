import './navbar.css'
import logo from '../../images/logo.png'

function Navbar(){
    return <div className='main'>
        {/* logo */}
        <div className='logo-div'>
            <img src={logo} alt="logo" />
            <span>KASUKA</span>
        </div>
        {/* links */}
        <ul>
            <li><a href="#"></a>خانه</li>
            <li><a href="#"></a>درباره ما</li>
            <li><a href="#"></a>خدمات</li>
            <li><a href="#"></a>نمونه کارها</li>
            <li><a href="#"></a>تیم</li>
            <li><a href="#"></a>لیست کشویی</li>
            <li><a href="#"></a>تماس با ما</li>
        </ul>
        {/* start button */}
        <button>َ<a href="#">شروع</a></button>
    </div>
}

export default Navbar