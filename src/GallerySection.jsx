const GallerySection = ({ dalleImages }) => {
    return (
        <div className='gallery__container'>
            <h2 className="gallery__container__title">AI Gallery</h2>
            <h3 className="gallery__container__subtitle">Author: DALL-E | <i>OpenAI</i></h3>
            {
                dalleImages.map((dalleImage) => (
                    <section className='gallery__section'>
                        <img src={dalleImage.img} alt='Dalle Image' />
                        <h4 className='gallery__imgTitle'>{dalleImage.name}</h4>
                        <p className="gallery__imgPrompt">{dalleImage.prompt}</p>
                    </section>
                ))
            }
        </div>
    )
}

export default GallerySection