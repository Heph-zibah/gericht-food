import React from 'react'
import heroImg from '../../assets/Hero-img.svg'
import heroImg2 from '../../assets/hero--img.svg'

const Hero = () => {
  return (
    <>
    <section className='hero__container'>
        <div className='hero__img'>
        <img src={window.innerWidth > 1200 ? heroImg : heroImg2} alt="food" />
        </div>
        {window.innerWidth > 1200 ? <div className="line"></div> : null}
        <div className='hero__info'>
            <h5>Chase the new Flavour</h5>
            <h1>The key to Fine dining</h1>
            <p>Sit tellus lobortis sed senectus vivamus molestie. 
                Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
            </p>\
            <button>Explore More</button>
        </div>
    </section>
    </>
  )
}

export default Hero