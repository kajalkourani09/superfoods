import React from 'react'
import '../css/products.css'
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
import fr from '../assests/images/Front-min.png'
import { useRef,useLayoutEffect,useEffect, useState } from 'react'
import Footer from './Footer'
function AllProducts() {
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
        <div className='container clh1'>
            <div className='clh4h' style={{display:"flex",flexWrap:'wrap',justifyContent:"center",alignItems:"center"}}>
                <div>
                <div class="card clhcard" style={{backgroundColor:"#4d5056",width:"20rem",minHeight:"70vh",objectFit:'contain',overflow:"hidden"}}>
  <center><img src={bc} style={{width:"20rem"}} class="card-img-top" alt="..."/></center>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text" style={{fontSize:"20px",marginTop:"0px",color:"grey"}}>Some quiild on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>

                <div>
                <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div>
                <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div>
                <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                
                
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default AllProducts
