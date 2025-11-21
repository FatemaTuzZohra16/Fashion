import React from 'react'
import Container from '../Layout/Container'
import about from '../../assets/about.png'
import Text from '../About/Text.jsx'
import Approach from './Approach.jsx'

const About = () => {
  return (
   <>
    <div
      className="w-full bg-cover bg-center bg-no-repeat rounded-xl"
      style={{ backgroundImage: `url(${about})` }}
    >
      <Container>
        <div className='text-center text-white py-[176px]'>
          <h2 className='text-[70px] leading-[84px] mb-4'>We believe<br/>
            we can all<br/> make<br/>a difference.</h2>
          <p className='text-[24px] leading-[33.2px]'>Our way: Exceptional quality.<br/>
            Ethical factories. Radical Transparency.</p>
        </div>
      </Container>
    </div>
    <Text />
    <Approach />
   </>
  )
}

export default About