import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import Marquee from './Marquee'
import ReverseMarquee from './ReverseMarquee'

function App() {
  useRef(()=>{
    toggleFullScreen()
  })
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  return (
    <>
      <Marquee />
      <ReverseMarquee />
      <Marquee />
      <ReverseMarquee />
      <Marquee />
      <ReverseMarquee />
      <div className='flex flex-row'>
        <div className='w-1/3'>
          <Marquee />
          <ReverseMarquee />
        </div>
        <div className='w-1/3 rounded-xl bg-yellow-200 p-10'>
          <b className='text-l'>
          HAPPY BIRTHDAY PETE
          </b>
        </div>
        <div className='w-1/3'>
          <Marquee />
          <ReverseMarquee />
        </div>
      </div>
      <Marquee />
      <ReverseMarquee />
      <Marquee />
      <ReverseMarquee />
      <Marquee />
      <ReverseMarquee />
      <Marquee />
      <ReverseMarquee />
    </>
  )
}

export default App
