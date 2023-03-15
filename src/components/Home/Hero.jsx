import React from 'react'
import heroImg from '../../assets/Hero-img.svg'
import heroImg2 from '../../assets/hero--img.svg'
import line from '../../assets/Vector.svg'

const Hero = () => {
  return (
    <>
    <section className='hero__container'>
        <div className='hero__img'>
        <img src={window.innerWidth > 1200 ? heroImg : heroImg2} alt="food" />
        </div>
        \
        <div className='hero__info'>
            <h5>Chase the new Flavour</h5>
            <img src={line} alt="line" />
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