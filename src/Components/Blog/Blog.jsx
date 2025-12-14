import React from 'react'
import Container from '../Layout/Container'
import Follow from './Follow'
import Progress from './Progress'
import blog from '../../assets/blog.png'
import Latest from './Latest'

const Blog = () => {
  return (
    <>
    <div className='border-t border-[#eeeded] mb-[64px]'>
        <Container>
            <div className='border-t-[14px] border-[#262626] mb-[8px] mt-[64px]'>
                <h2 className='font-semibold text-[160px] leading-[176px]'>everworld</h2>
                <p className='text-[24px] leading-[33px]'>We’re on a mission to clean up a dirty industry.<br/>
These are the people, stories, and ideas that will help us get there.</p>
            </div>
        </Container>
    </div>
    <Latest />
    <div>
      <Container>
        <img src={blog} alt=""  className='flex justify-start'/>
      </Container>
    </div>
    <Progress />
    <Follow />
    </>
  )
}

export default Blog