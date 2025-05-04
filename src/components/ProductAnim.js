import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { gsap } from 'gsap'
import { Power3 } from 'gsap'
import upa from '../assests/icons/arrow-up.png'
import ad from '../assests/images/essential.png'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import bc from '../assests/images/popular (2).png'
import dr from '../assests/images/crunchy.png'
import { Link } from 'react-router-dom'
import da from '../assests/images/downarrow-min.png'
import fr from '../assests/images/Front-min.png'

import { useRef,useLayoutEffect,useEffect, useState } from 'react'
import Footer from './Footer'
function ProductAnim() {

  let a=useRef(null)
  let b=useRef(null)
  let c=useRef(null)
  let d=useRef(null)
  const refe=useRef(null)
  let fron =useRef(null)
  let po=useRef(null)
  let es=useRef(null)
  let cre=useRef(null)

  let h1a=useRef(null)
  let h1b=useRef(null)
  var t1=gsap.timeline()

  const handle = () =>{
    refe.current?.scrollIntoView({behavior: 'smooth'});
}

  

  const top=function()
  {
    console.log("Scroll")
    window.scrollTo(0,0)
  }
  return (

    <>
    <AnimatePresence>
      <motion.div ref={refe} className='mainpro '
       initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        exit={{opacity:0}}
      >
        <div className='yxx' rel='preload'>

        <div className='row' style={{position:"relative"}}>
        <div style={{marginTop:"10px",position:"sticky",width:"100%",zIndex:1}}>
      <Navbar></Navbar>
      </div>
          {/* <div className='imagepro' style={{ position: "relative" }}>
            <img className='imgprohead' src={p}></img>
          </div> */}

          <div className='bottomrow textpr justify-content-between' style={{}}>
            <div className='textleft'>
              <div><h1 ref={el=>h1a=el} style={{ fontSize: "8vw" }}>Classic</h1></div>
              <div><h1 ref={el=>h1b=el} style={{ fontSize: "8vw" }}>Variants</h1></div>
            </div>
            <div className='boright'>
              {/* <img className='downar' src={da} ></img> */}
            </div>
          </div>
          </div>
        </div>
        </motion.div>
        </AnimatePresence>
      

      {/* horizontal scrolling */}
      <div className="contaioner"></div>
      <div className='row' style={{marginBottom:"60px"}}>
    <div className='container text-end' style={{justifyContent:"end",position:"absolute",right:"1%"}}>
       <div className='boxbou' style={{height:"150px"}}>
        <img onClick={handle} src={upa} className='boxbo bounce-1'></img>
       </div>
       </div>
    </div>
      

      <Footer></Footer>
    </>
  )
}

export default ProductAnim
