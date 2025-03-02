import './features.css'
import featuresImg from '../../images/features.jpg'
import FBox from './fBox/fBox'

function Features(){
    return <div className='features-main'>
        <img src={featuresImg} alt="features image" />
        <div className='features-details'>
            <FBox title="تبلیغ سختی است" des="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"></FBox>
            <FBox title="کدام یک از اینهاست" des="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"></FBox>
            <FBox title="یا کور شده است" des="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"></FBox>
            <FBox title="حقیقت مبارک" des="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"></FBox>
        </div>
    </div>
}

export default Features