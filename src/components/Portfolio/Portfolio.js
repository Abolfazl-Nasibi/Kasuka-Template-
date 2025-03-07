import './portfolio.css'
import CateBox from './CategoryBox/catebox'
import img1 from '../../images/portfolio-1.jpg'
import img2 from '../../images/portfolio-2.jpg'
import img3 from '../../images/portfolio-3.jpg'
import img4 from '../../images/portfolio-4.jpg'
import img5 from '../../images/portfolio-5.jpg'
import img6 from '../../images/portfolio-6.jpg'
import img7 from '../../images/portfolio-7.jpg'
import img8 from '../../images/portfolio-8.jpg'
import img9 from '../../images/portfolio-9.jpg'

function Portfolio(){
    return <div className="portfolio-main">
        <span className='title'>نمونه کارها ما را بررسی کنید</span>
        <div className="cate-boxes">
            <CateBox text='همه'></CateBox>
            <CateBox text='برنامه'></CateBox>
            <CateBox text='محصول'></CateBox>
            <CateBox text='اینترنت'></CateBox>
        </div>
        <div className="images">
            <div className="right">
                <img src={img3} alt="img" className='img'/>
                <img src={img5} alt="img" className='img'/>
                <img src={img9} alt="img" className='img'/>
            </div>
            <div className="center">
                <img src={img2} alt="img" className='img'/>
                <img src={img4} alt="img" className='img'/>
                <img src={img7} alt="img" className='img'/>
                <img src={img8} alt="img" className='img'/>
            </div>
            <div className="left">
                <img src={img1} alt="img" className='img'/>
                <img src={img6} alt="img" className='img'/>
            </div>        
        </div>
    </div>
}

export default Portfolio