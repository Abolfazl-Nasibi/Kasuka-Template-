import './navbar.css'
import logo from '../../images/logo.png'
import dropDown from '../../images/drop-down.png'

function Navbar(){
    return <div className='main'>
        {/* logo */}
        <div className='logo-div'>
            <img src={logo} alt="logo" />
            <span>KASUKA</span>
        </div>
        {/* links */}
        <ul>
            <li><a href="#">خانه</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">خدمات</a></li>
            <li><a href="#">نمونه کارها</a></li>
            <li><a href="#">تیم</a></li>
            <li className='has-dropDown'><a href="#">لیست کشویی</a><img src={dropDown} alt="" />
                <ul><li>محتوا</li>
                <li>محتوا</li>
                <li>محتوا</li>
                <li>محتوا</li>
                <li>محتوا</li></ul>
            </li>
            <li><a href="#">تماس با ما</a></li>
        </ul>
        {/* start button */}
        <button>َ<a href="#">شروع</a></button>
    </div>
}

export default Navbar