import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect,useState, useEffect,useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../css/Layered.css'
function Layered() {
  gsap.registerPlugin(ScrollTrigger)
  let ia=useRef(null)
  let gal=useRef(null)
  
  useLayoutEffect(()=>{
    let mm=gsap.matchMedia();
    mm.add("(min-width:600px)",()=>{
      ScrollTrigger.create({
        trigger:gal,
        start:"top top",
        end:"bottom bottom",
        pin:ia,
        // scrub:1,
      })
    })
   
    
    
  },[])
  return (
    <div>
    <div class="spacer"></div>

<div class="gallery" ref={el=>gal=el}>
<div class="right" ref={el=>ia=el}>
		{/* <div class="photos"></div> */}
	</div>
	<div class="left">
		<div class="detailsWrapper">
			<div class="details">
				<div class="headline"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
			</div>

			<div class="details">
				<div class="headline"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
			</div>

			<div class="details">
				<div class="headline"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
			</div>

		</div>
	</div>

  

	
</div>

<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>

    </div>
  )
}

export default Layered
