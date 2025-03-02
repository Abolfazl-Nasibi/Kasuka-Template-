import './header.css'
import HBox from './HeaderBox/header-box'

function Header(){
    return <header>
        {/* top */}
        <div className='hTexts'>
        <span>راه حل های قدرتمند دیجیتال با</span>
        <span>Kasuka</span>
        <span>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</span>
        </div>

        <div className="hBoxes">
            <HBox title='اطلاعات ذخیره شده'></HBox>
            <HBox title='عملکرد های پایانی'></HBox>
            <HBox title='نمونه کار ها'></HBox>
            <HBox title='نمودار کیفی'></HBox>
            <HBox title='متن نمایشی'></HBox>
        </div>
    </header>
}

export default Header