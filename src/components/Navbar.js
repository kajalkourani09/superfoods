import React, { useEffect } from 'react'
import useOutsideClick from './useOut'
import { useRef } from 'react'
import '../css/navbar.css'
import { useState } from 'react'
import {AnimatePresence, transform} from 'framer-motion'
import l from '../assests/icons/OG_White.png'
import righ from '../assests/icons/right.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import eq from '../assests/icons/equal.png'
import sub from '../assests/icons/subtraction.png'
import c from '../assests/icons/OG_Black.png'
function Navbar() {
    const [isActives, setIsActives] = useState(false);        

      const refe=useRef(null);    

      useEffect(()=>{

        const handleClickout=(e)=>{
          if(!refe.current.contains(e.target)){
            setIsActives(false)
            // console.log("Out");
          }
          else{
            console.log('In')
          }
        }
        
        document.addEventListener('click',handleClickout,true)
  
        return()=>{
          document.removeEventListener('click',handleClickout,true)
  
        }
      },[])

      

    
    const first={
        padding:"0px",
        // zIndex:10,
  
        // background: isActives ?"white": "transparent" ,
        background: isActives ?"#F6F5EF": "transparent" ,
        margin:"0px 0px 0px 0px",
        borderRadius:"30px 30px 0px 0px"
    }

    const second={
      zIndex:0,

        transition: "width 10s ease-in, height 1s ease-in",
        display:"flex",
        width:"auto",
        padding:"25px",
        background:"#F6F5EF",
        // background:'white',
        margin:"0px 0px 0px 0px",
        height:"40vh",
        borderRadius:"0px 0px 30px 30px"
       
        // position:"relative"
    }



    
  

  return (
    <>

    <div ref={refe}>
    <AnimatePresence>
    <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeOut", duration: 0.8 }}
        exit={{opacity:0}}>
        <nav className="navbar firstnav" style={first}>
  <div className="container-fluid">
    <Link style={{textDecoration:"none"}} to="/"><a className="navbar-brand"><img src={isActives ? c : l} className="logonav"></img></a></Link>
    
    <div className="justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={() => setIsActives(!isActives)}>
        <div style={{width:"120px",height:"45px",borderRadius:"100px",border:"1px solid black",backgroundColor:"#F6F5EF",display:"flex",justifyContent:"end",alignItems:"center"}}>
        <div>{isActives ? "" : <p style={{color:"black",marginRight:"7px",marginTop:"12px"}}>Explore</p>}</div>
          <div><img style={{marginRight:"10px",width:"40px",height:"40px",cursor:"pointer"}} src={isActives ? sub : eq}></img></div>
        </div>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</motion.div>
    
    {isActives && (
        <motion.div className='container-fluid secnav' style={second} 
        
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{ stiffness:15,ease: "easeInOut", duration: 0.4 }}
        exit={{opacity:0}}

        >
        <div  className='row' style={{display:"flex",width:"100%"}}>
            

        <div className='col-sm-3 hov'>
            <Link style={{textDecoration:"none"}} to="/about">
            <div className='abcdef'>  
            <div><p className='text-center abd'>ABOUT US</p></div>
            <div><img className='imghi' src={righ}></img></div>
            </div>
            <div className='vertical'></div>
            </Link> 
            </div>



            <div className='col-sm-3 hov'>
            <Link style={{textDecoration:"none"}} to="/products">

            <div className='abcdef'>  
            <div><p className='text-center abd'>PRODUCTS</p></div>
            <div><img className='imghi' src={righ}></img></div>
            </div>
            <div className='vertical'></div>
            
            </Link>
            </div>
            {/* <div className='vertical'></div> */}
            


           



            <div className='col-sm-3 hov'>
            <Link style={{textDecoration:"none"}} to="/contact">
            <div className='abcdef'>  
            <div><p className='text-center abd'>WHOLESALE</p></div>
            <div><img className='imghi' src={righ}></img></div>
            </div>
            <div className='vertical'></div>
            </Link>
            </div>



            <div className='col-sm-3 hov'>
            <a href={'https://koshaafoods.blogspot.com/'}>

            <div className='abcdef'>  
            <div><p className='text-center abd'>BLOGS</p></div>
            <div><img className='imghi' src={righ}></img></div>
            </div>

            </a>
            </div>
        </div>
    </motion.div>
    )}
    </AnimatePresence>
    </div>
    </>
  )
}

export default Navbar
