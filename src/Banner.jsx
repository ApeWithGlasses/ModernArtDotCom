import bannerImage from './assets/dalle1.png'

const Banner = () => {
    return (
        <div className="banner__container">
            <img src={bannerImage} alt="" />
            <div className="span__container">
            <span className='span__container'>"A dark image with diffuse shapes in grayish tones, with a subtle line texture at the top that resembles an electrical storm."</span>
            </div>
        </div>
    )
}

export default Banner