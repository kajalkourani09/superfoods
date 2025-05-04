import React from 'react'
import '../css/about.css'
import ab from '../assests/images/4.png'
import Footer from './Footer'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useEffect,useRef } from 'react'
import { gsap } from 'gsap'
import upa from '../assests/icons/arrow-up.png'
import { Power3 } from 'gsap'
import Navbar from './Navbar'
import aa from '../assests/images/111.png'
function About() {

  let fir=useRef(null)
  let sec=useRef(null)
  let ro=useRef(null)
  let co=useRef(null)
  const refe=useRef(null)
  let c1=useRef(null)
  let h1a=useRef(null)
  let h1b=useRef(null)
  let moe=useRef(null)
  let moee=useRef(null)
  let moeee=useRef(null)

  // useEffect(() => {
  //   if (moe.current) {
  //     const scroller = {
  //       scrollTop(value) {
  //         if (value !== undefined) {
  //           moe.current.scrollTop = value;
  //         }
  //         return moe.current.scrollTop;
  //       },
  //       getBoundingClientRect() {
  //         return moe.current.getBoundingClientRect();
  //       },
  //     };

  //     gsap.registerPlugin('scrollerProxy');
  //     gsap.scrollerProxy(moe.current, scroller);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (moe.current) {
  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         scroller: c1.current,
  //         trigger: moe.current,
  //         start:"top center",
  //         end:"bottom 80px",
  //         scrub:true
  //       },
  //     });

  //     timeline.from(moe.current, {
  //       x:-500,
  //       duration:5,
  //     });
  //   }
  // }, []);


  useEffect(()=>{
    gsap.from(moe,{
        x:-100,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:moe,
            start:"top center+=100",
            // pin:true,
            // markers:true,
            end:"bottom 80px",
            // scrub:true
        }
    })
},[])

useEffect(()=>{
  gsap.from(moee,{
      // y:-300,
      opacity:0,
      duration:3,
      scrollTrigger:{
        trigger:moee,
          start:"top center",
          end:"bottom 80px",
          // markers:true,
          // pin:true,
          // scrub:true
      }
  })
},[])

useEffect(()=>{
  gsap.from(moeee,{
      x:300,
      duration:3,
      scrollTrigger:{
          trigger:moeee,
          start:"top center+=350",
          end:"bottom 80px",
          // markers:true,
          // pin:true,
          // scrub:true
      }
  })
},[])


  const handle = () =>{
    refe.current?.scrollIntoView({behavior: 'smooth'});
}

  var t1=gsap.timeline({delay:0.3})
  useEffect(()=>{

    

    gsap.from(h1a,{
      duration:0.8,
      y:100,
      scrollTrigger:{
        trigger:c1,
        start:"top center+=100",
        toggleActions:"play none none none"
      }
    })
    gsap.from(h1b,{
      duration:0.8,
      y:100,
      delay:0.3,
      scrollTrigger:{
        trigger:c1,
        start:"top center+=100",
        toggleActions:"play none none none"
      }
    })

    gsap.from(fir,{
      duration:0.7,
      opacity:0,
      ease:Power3.easeIn,
      scrollTrigger:{
        trigger:co
      }
    })

    gsap.from(sec,{
      duration:0.8,
      opacity:0,
      ease:Power3.easeIn,
      delay:0.3,
      scrollTrigger:{
        trigger:co
      }
    })
  })
  return (
    <>
    <AnimatePresence>
      <motion.div ref={refe} className='container-fluid' style={{ backgroundColor: "#282C32" }}
      initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeInOut", duration: 1 }}
        exit={{opacity:0}}
        >
      
        <div className='row'>
        <div style={{position:"absolute",marginTop:"10px"}}>
      <Navbar></Navbar>
      </div>
          <div className='col-sm-6' style={{ padding: 0,objectFit:"cover" }}>
            <img rel='preload' src={ab} style={{width: "100%",  height: "100%",backgroundColor:"rgba(0,0,0,0.8)"}}></img>
          </div>
          <div ref={el=>co=el} className='col-sm-6' style={{}}>
            <div className='row text-center'>
              <h1 className='abouttext' style={{}}><span ref={el=>fir=el}> Koshaa </span><span ref={el=>sec=el}>Foods</span></h1>
              
            </div>
            <div className='row' style={{ marginTop: "20vw" }}>
              <div className='textrightfloat'>
                <p style={{ color: "white",marginBottom:"20px",fontSize:"19px" }}>Founded in 2022 by Somya & Shorya with a passion for bringing superfoods in their raw & natural form to every household. In recent times there has been a paradigm shift in terms of people inching towards conscious eating and holistic living which sparked the idea of making these superfoods available to everyone. We Source high-quality ancient superfoods from their place of heritage and pop them in the authentic traditional way to maintain the nutrients of the seeds.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
     
      
      <div ref={el=>c1=el} className='container-fluid' >
        <div className='row sowed' style={{}}>
          <div style={{ marginTop: "10vw", marginLeft: "5vw" }}>
            <h1 ref={el=>h1a=el} style={{ fontSize: "5vw" }}>Sowed with passion,</h1>
            <h1 ref={el=>h1b=el} style={{ fontSize: "5vw" }}>  popped with precision.</h1>
          </div>
        </div>


        <div className='row' ref={el=>ro=el} style={{ marginTop: "15vw", }}>

          <div className='col-sm-7' style={{ paddingLeft: "25vw" }}>
            <div ref={el=>moe=el} style={{ width: "100%", height: "100%" }} className='axx'></div>
          </div>
          <div className='col-sm-4'>
            <div className='row'>
              <h1 ref={el=>moee=el} className='a' style={{}}>Committed to using locally sourced, organic ingredients</h1>
            </div>
            <div className='row b' style={{}}>
              <p ref={el=>moeee=el} style={{fontSize:"20px"}}>We work directly with the local farmers in our seed-to-snack model to provide you with conscious and nutritious superfoods.</p>
            </div>

          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>


      <div className='container-fluid back'>
      <div className='row'>
        <div className="" style={{padding:"3rem"}}>
          <h1 className='ap' style={{}}>THE PROBLEM</h1>
          <h1 className='ap' style={{}}>WE ADDRESS</h1>
        </div>
      </div>
      <div className='row rowmargin'>
              <div className='textrightf'>
                <p style={{ color: "white",fontSize:"20px" }}>Over the past few decades, globalization has homogenized what we eat which resulted in a loss of diversity.
Of the roughly 6,000 different plants once consumed by human beings. Only 9 remain main staples today in which only 4 of them account for 60% of worldwide calorie intake (rice, wheat, corn, and potato). Over-reliance on so few products creates an imbalance in nature & diet.
Due to monoculture, heritage crop varieties go extinct with the risk of losing not only traditional foodways but also flavors, smells, and textures that may never be experienced again.
</p>
              </div>
            </div>
      </div>



      <div className='container-fluid'>
        <div className='container'>
          <div className='row text-center' >
            <h1 className='rot' style={{ fontSize: "4.7vw", padding: "6vw" }}>Three principles that guide our operations and decision-making
            </h1>
          </div>
{/* 
          <div className='row'>
          <div>
            <img src={aa} style={{width:"100%"}}></img>
          </div>
            
          </div>

          <div className='row' style={{marginTop:"20px"}}>
          <div>
            <img src={aa} style={{width:"100%"}}></img>
          </div>
            
          </div>

          <div className='row' style={{marginTop:"20px"}}>
          <div>
            <img src={aa} style={{width:"100%"}}></img>
          </div>
            
          </div>

          <div className='row'  style={{marginTop:"20px"}}>
          <div>
            <img src={aa} style={{width:"100%"}}></img>
          </div>
            
          </div>

          <div className='row'  style={{marginTop:"20px"}}>
          <div>
            <img src={aa} style={{width:"100%"}}></img>
          </div>
            
          </div> */}

          {/* <div className='row' style={{ width: "100%", margin: "auto", marginTop: "20px", marginBottom: "20px" }}>
            <div className='container cardsp'>

              <div className="card" style={{}}>
                <img src={p} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className='h1text'>WHAT IS OUR ROLE IN THIS?</h1>
                  <p style={{}} className="card-text">Koshaa Foods wants to promote a diverse, healthy and sustainable food system by exploring ancient superfoods and empowering local cultures and history. They aim to connect consumers with the source of their snacks and the people who produce them.</p>
                </div>
              </div>

              <div className="card" style={{}}>
                <img src={p} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className='h1text'>WHAT DOES "KOSHAA" MEAN?</h1>
                  <p style={{}} className="card-text">Koshas are the five layers of awareness that veil the Atman, or true Self. Discovering each layer is believed to bring the individual closer to oneness with the universe and the true Self.
In Sanskrit, kosha means "sheath" or "covering." As such, the koshas are often called the five sheaths.</p>
                </div>
              </div>

              <div className="card" style={{}}>
                <img src={p} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className='h1text' style={{}}>Makhana’s reference in Ayurveda and Mythology:</h1>
                  <p style={{}} className="card-text">Makahan, an Ayurvedic superfood, is considered "God's food" for its many health benefits. Ayurveda emphasizes individual uniqueness and listening to one's body, while eating locally sourced food supports both the body and the environment, as well as local farmers.</p>
                </div>
              </div>

              

              


            </div>
          </div> */}
          <div className='row' style={{marginBottom:"60px"}}>
    <div className='container text-end' style={{justifyContent:"end",position:"absolute",right:"1%"}}>
       <div className='boxbou' style={{height:"150px"}}>
        <img onClick={handle} src={upa} className='boxbo bounce-1'></img>
       </div>
       </div>
    </div>
        </div>
      </div>
      
      
      <Footer></Footer>
      </AnimatePresence>
    </>
  )
}

export default About
