import './stats.css'
import img from '../../images/counts-img.jpg'
import StatsBox from './StatsBox/statsbox'

function Stats(){
    return <div className='stats-main'>
        <img src={img} alt="image" />
        <div>
            <div className="title">
                <span>
                    شایسته ترین لذت را به هر حال ارائه می دهد
                    </span>
                <p>
                خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
                </p>
            </div>
            <div className="counts">
                <StatsBox number='65' des='مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.' />
                <StatsBox number='85' des='پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد' />
                <StatsBox number='32' des='سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد' />
                <StatsBox number='20' des='جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند' />
            </div>
        </div>
    </div>
}

export default Stats