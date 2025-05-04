import React from 'react'
import '../css/home.css'
// import 'locomotive-scroll/dist/locomotive-scroll.css'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Power3 } from 'gsap'
import { Sine } from 'gsap'
import { useRef,useLayoutEffect,useEffect } from 'react'
import x2 from '../assests/images/fi11.png'
import upa from '../assests/icons/arrow-up.png'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import side from '../assests/images/fi4.png'
import Navbar from './Navbar'
import Footer from './Footer'
import s from '../assests/images/5 (1).png'
import { Link } from 'react-router-dom'
import x1 from '../assests/images/ri7.png'
// import LocomotiveScroll from 'locomotive-scroll'
// import ScrollTriggerProxy from './ScrolltriggerProxy'



function Home() {
    gsap.registerPlugin(ScrollTrigger)
    const containerRef=useRef(null)

    const windowSize = useRef([window.innerWidth, window.innerHeight]);


    let imga=useRef(null)
    let imgb=useRef(null)
    let imgc =useRef(null)
    let one=useRef(null)
    let textone=useRef(null)
    let rowimglast=useRef(null);
    let fifsidel=useRef(null)
    let third=useRef(null)
    let sidel=useRef(null)
    let sider=useRef(null)
    let main=useRef(null)
    let secondh=useRef(null)
    let fifsider=useRef(null)
    let fourth=useRef(null)
    let pc=useRef(null)
    let e=useRef(null)
    let fr=useRef(null)
    const refe=useRef(null)
    let sidemid=useRef(null)
    let fifsi=useRef(null)

    let h1aa=useRef(null)
    let h1ab=useRef(null)
    let h1ac=useRef(null)
    var t1=gsap.timeline({delay:0.1})

    const handle = () =>{
        refe.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    useEffect(()=>{
        (
        async () =>{
            const LocomotiveScroll=(await import ('locomotive-scroll')).default;
            const locomotiveScroll=new LocomotiveScroll();

        }
        )()

        
    })

    useLayoutEffect(()=>{
        
    
        ScrollTrigger.create({
            trigger:".gallery",
            start:"top top",
            end:"bottom bottom",
            pin:".right"
        })
        
    })

    

    useLayoutEffect(()=>{
        if(windowSize.current[0]>"600px"){
            gsap.to(imga,{
                rotate:-10,
                x:-70,
                duration:5,
                scrollTrigger:{
                    trigger:imga,
                    start:"top center",
                    end:"bottom 80px",
                    scrub:true
                }
            })
        }
        else{
            gsap.to(imga,{
                rotate:-10,
                x:-20,
                duration:5,
                scrollTrigger:{
                    trigger:imga,
                    start:"top center",
                    end:"bottom 80px",
                    scrub:true
                }
            })
        }
       
    },[])

    useLayoutEffect(()=>{
        if(windowSize.current[0]>"600px"){
            gsap.to(imgc,{
                rotate:10,
                x:50,
                duration:5,
                scrollTrigger:{
                    trigger:imgc,
                    start:"top center",
                    end:"bottom 80px",
                    scrub:true,
                    toggleActions:"play none play play"
                }
            })
        }else{
            gsap.to(imgc,{
                rotate:10,
                x:20,
                duration:5,
                scrollTrigger:{
                    trigger:imgc,
                    start:"top center",
                    end:"bottom 80px",
                    scrub:true,
                    toggleActions:"play none play play"
                }
            })
        }
       
    },[])

    useLayoutEffect(()=>{

       

        gsap.fromTo(sidel,{
            opacity:0,
            rotate:-20,
        }
            ,{
            duration:0.5,
            opacity:1,
            rotate:-20,
            ease:Power3.easeInOut,
            scrollTrigger:{
                trigger:sidel,
                start:"top center+=100",
               toggleActions:"play none none none"
            }
        })

        gsap.fromTo(sider,{
            opacity:0,
            rotate:20,
        }
            ,{
            duration:0.4,
            opacity:1,
            rotate:20,
            ease:Power3.easeInOut,
            scrollTrigger:{
                
                trigger:secondh,
                start:"top center+=100",
               toggleActions:"play none none none"
            }
            ,delay:0.3
        })

        gsap.fromTo(sidemid,{
            opacity:0,
        }
            ,{
            duration:0.3,
            opacity:1,
            ease:Power3.easeIn,
            scrollTrigger:{
                trigger:secondh,
                start:"top center+=100",
               toggleActions:"play none none none"
            }
            ,delay:0.2
        })

        gsap.fromTo(pc,{
            opacity:0,
            y:10
        }
            ,{
            duration:0.2,
            opacity:1,
            ease:Power3.easeIn,
            scrollTrigger:{
                scroller:e,
                trigger:e,
                start:"top bottom-=100",
               toggleActions:"play none none none"
            }
            ,delay:0.1
        })

        gsap.fromTo(fourth,{
            opacity:0,
            y:10
        }
            ,{
            duration:0.4,
            opacity:1,
            ease:Power3.easeIn,
            scrollTrigger:{
                trigger:fr,
                start:"top center+=100",
               toggleActions:"play none none none"
            }
        
        })


    //     gsap.to(fifsidel,{
    //         rotate:10,
    //         x:-130,
    //         y:"7vw"
    //     },{
    // scrollTrigger:{
    //     trigger:fifsidel,
    //     pin:fifsi,
    //     start:"top center",
    //     end:"+=500"
    // }
    //     })

    

        gsap.to(fifsider,{
            rotate:-10,
            x:150,
            y:-50
        })

        t1.from([h1aa,h1ab,h1ac],{duration:0.5,y:40,ease:Sine.easeInOut,delay:0.1,stagger:0.15},'start')

        
    },[])

    useLayoutEffect(()=>{
        gsap.to(fifsidel,{
            rotate:-10,
            x:-25,
            y:-150,
            duration:3,
            scrollTrigger:{
                trigger:fifsidel,
                start:"top center",
                end:"bottom",
                // markers:true,
                scrub:true,
                toggleActions:"play none play play"
            }
        })
    },[])

    useLayoutEffect(()=>{
        gsap.to(fifsider,{
            rotate:10,
            x:150,
            y:100,
            duration:3,
            scrollTrigger:{
                trigger:fifsider,
                start:"top center",
                end:"bottom",
                // markers:true,
                scrub:true,
                toggleActions:"play none play play"
            }
        })
    },[])

    const top=function()
{
  window.scrollTo(0,0)
}

  return (
    <>



{/* <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
> */}
{/* <ScrollTriggerProxy> */}

  <main className='appe' >


  <section>

    <AnimatePresence>
   
    <motion.div ref={refe} className=' panel mainhead' rel='preload' style={{}}
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        exit={{opacity:0}}
    >
    <div className=' blim'>
    
    <div className='row' style={{position:"relative"}}>
      <div style={{position:"sticky",marginTop:"10px",zIndex:1}}>
      <Navbar></Navbar>
      </div>

      <div className='bottomro textpr' style={{}}>
            <div className='textleft'>
              <div><h1 ref={el=>h1aa=el} className='homeh1'>Nourish your soul</h1></div>
              <div><h1 ref={el=>h1ab=el} className='homeh1' >with Pond-grown</h1></div>
              <div><h1 ref={el=>h1ac=el} className='homeh1' >makhana (Foxnuts)</h1></div>
            </div>
          
          </div>
          </div>
         
</div>
    </motion.div>
    
    </AnimatePresence>

    </section>
    
    <section>

    <div className='container-fluid panel secondhead' ref={el=>secondh=el}>
        
        <div className='col-3'>
            <img ref={el=>sidel=el} className='sidel' src={side}></img>
        </div>
        <div className='col-6'>
        <div className='row'>
            <div>
                <h1 className='h1textsecond' ref={el=>sidemid=el}>Superfood for everyone</h1>
            </div>
        </div>
        <div className='row'>
            <div>
                <p className='ptextsecond'>
                Koshaa Foods is a culmination of the efforts of the farmer and Koshaa family to bring to you the original pond-grown makhana in its natural raw form.
                </p>
            </div>
            <Link to={"/about"} onClick={top} style={{textDecoration:"none"}} preventScrollReset={true} className='boxbutton'>
              <p className='pbox' >Learn More</p>
            </Link>
        </div>
        </div>
        <div className='col-3'>
            <img ref={el=>sider=el} className='sider' src={x2}></img>
        </div>
    </div>

    
</section>

<section >



<div ref={el=>main=el} style={{}}>
    <div ref={el=>third=el} className='container-fluid thirdhome' style={{}}>
        <div className='container'>
            <div className='row leftm' style={{marginTop:""}}>
                <div className='col-sm-5'>
                <h1 className='h1t' style={{}}>Farming for a sustainable future</h1>
                </div>
                <div className='col-sm-7 colse' style={{}} ref={el=>textone=el}>
                    
                    <div className='gapb'><h1>With the community</h1>
                    <p style={{fontSize:"25px",marginTop:"25px"}}>Empowering the culture & history of the land and the people who produce them while creating employment for the women of the village.</p>
                    </div>
                    {/* <div className='gapb' style={{}}><h1>High-quality produce</h1>
                    <p style={{fontSize:"25px",marginTop:"25px"}}>Growing Makhana in natural ponds where debris from the crop helps in the growth of zooplanktons(fish food) and in return, the fecal matter of the fish acts as an organic source of manure for the plant.</p>
                    </div>
                    <div className='gapb'><h1>Ecosystem conservation</h1>
                    <p style={{fontSize:"25px",marginTop:"25px"}}>In the process of growing Makhana in freshwater ponds, there is no use of fertilizers and chemicals which helps in reducing the carbon footprint and keeping the natural water bodies intact.</p>
                    </div>
                    <div className='gapb'><h1>Energy-efficient & conservation</h1>
                    <p style={{fontSize:"25px",marginTop:"25px"}}>We prioritize biodiversity conservation by supporting sustainable agriculture practices and promoting pond farming to minimize energy consumption.</p>
                    </div> */}
                </div>
            </div>
            
        </div>
    </div>
    </div>


    </section>


    <section>
    <div ref={el=>fr=el} className='conatiner-fluid fourthhome' style={{display:"flex",justifyContent:"center"}}>
    <div className='container'>
        <div className='row text-center'>
            <h1 ref={el=>fourth=el} className='fouthhomeh1'>The traditional and sustainable farming process</h1>
            <p className='fouthhomep'>Our purpose is to nourish people and the planet. We take absolute pride in our traditional farming process which involves makhana cultivation in the freshwater ponds of Bihar followed by the labor-intensive harvesting and popping process using ancient tools and practices.</p>
        </div>
        <div className='row text-center' style={{display:"flex",justifyContent:"center",margin:"30px"}}>
        <div className='boxxbutton'>
            <Link to={"/about"} onClick={top}  style={{textDecoration:"none"}}><p className='pboxx' >Learn More</p></Link>
            </div>
        </div>
        <div className='row'>
            <div className='container imgcon'>
                
                <div>
                <div style={{borderRadius:"30px 30px 30px 30px"}} ref={el=>imga=el} className='img1fourth'></div>
                </div>
                
                <div>
                <div style={{borderRadius:"30px 30px 30px 30px"}} ref={el=>imgb=el}  className='img2fourth'></div>
                </div>

                <div className=''>
                <div style={{borderRadius:"30px 30px 30px 30px"}} ref={el=>imgc=el}  className='img3fourth'></div>
                
                </div>
            </div>
        </div>
    </div>
    </div>

    </section>

    <section>
    <div className='container-fluid fifthmain' ref={el=>fifsi=el}>
    <div className='row'>
        <div className='col-sm-4'>
            <img ref={el=>fifsidel=el} src={s} className="fifsidel"></img>
        </div>
        <div className='col-sm-8'>
            <div className='row' style={{justifyContent:"end"}}>
                <img ref={el=>fifsider=el} src={x1} className='fifsider'></img>
            </div>
            <div className='row' ref={el=>e=el}>
                <p ref={el=>pc=el} className='pfif'>We are on this beautiful mission to break the myth about makhana and make it available to every household.</p>
            </div>
        </div>
    </div>
    <div className='row'>
    <div className='container text-end' style={{justifyContent:"end",position:"absolute",right:"1%"}}>
       <div className='boxbou' style={{height:"150px"}}>
        <img onClick={handle} src={upa} className='boxbo bounce-1'></img>
       </div>
       </div>
    </div>
    </div>

    </section>
    <section>
    <Footer></Footer>
    </section>
    
    
  </main>
  {/* </ScrollTriggerProxy> */}
{/* // </LocomotiveScrollProvider> */}
     

  
    </>
  )
}

export default Home
