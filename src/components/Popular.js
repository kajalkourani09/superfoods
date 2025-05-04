import React from 'react'
import { useState,useRef ,useEffect} from 'react'
import upa from '../assests/icons/arrow-up.png'

import '../App.css'
import fill from '../assests/icons/new-moon.png'
import blank from '../assests/icons/dry-clean.png'
import e from '../assests/icons/Round Website Icon pack/5.png'
import f from '../assests/icons/Round Website Icon pack/6.png'
import Front1 from '../assests/images/essential.png'
import Front from '../assests/images/popular (2).png'
import cru from '../assests/images/crunchy.png'
import back from '../assests/images/Popular back.png'

import g from '../assests/icons/Round Website Icon pack/7.png'
import h from '../assests/icons/Round Website Icon pack/8.png'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductCard from './ProductCard'
// import Front from '../assests/images/popular.png'
import up from '../assests/icons/up.png'
import down from '../assests/icons/down.png'
function Popular() {

  const refe=useRef(null)
  const imgarr=[Front,back]
  let [count,setCount]=useState(0);
  // const [image,setImage]=useState(imgarr[count])


  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount(count => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  const image = imgarr[count % imgarr.length];

  const handle = () =>{
      refe.current?.scrollIntoView({behavior: 'smooth'});
  }

    const [isActive, setIsActive] = useState(false);
    const [isActivee,setIsActivee]=useState(false);
    const [isActiveee,setIsActiveee]=useState(false);
    return (
      <>
      <div className='container-fluid'  ref={refe}>
     
          <div className='row'>
          <div style={{position:"absolute",marginTop:"10px"}}>
        <Navbar></Navbar>
        </div>
              <div className='col-sm-6 one' style={{padding:0,backgroundColor:"#E0E0E0"}}>
                  <img className='mainma' src={image}></img>
                 
              </div>
  
  
              <div className='col-sm-6 two' style={{overflow:"auto",height:"145vh"}}>
              <div className='rightcontent' style={{}}>
              <h1 className='producthead'>Popular Raw Makhana</h1>
              <div className='row buttonrounded' style={{display:"flex",flexDirection:"row"}}>
                  <div className='box' style={{width:"160px",height:"50px",backgroundColor:"",margin:"15px",borderStyle:"solid",borderRadius:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <div style={{marginTop:"",display:"flex",justifyContent:""}}>
                  <div>
                  <img src={fill} style={{width:"30px",height:"30px",margin:"0px",marginRight:"5px"}}></img>
                  </div>
                  <div>
                  <img src={fill} style={{width:"25px",height:"25px",margin:"0px",marginRight:"5px"}}></img>
                  </div>
                  <div>
                  <img src={blank} style={{width:"20px",height:"20px",margin:"0px",marginRight:"5px"}}></img>
                  </div>
                  <div>
                  <img src={blank} style={{width:"15px",height:"15px",margin:"0px",marginRight:"5px"}}></img>
                  </div>
                </div>
                  </div>
                  <div className='box' style={{width:"160px",height:"50px",backgroundColor:"",margin:"15px",borderStyle:"solid",borderRadius:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p style={{fontSize:"large",marginTop:"13px"}}> 5-6+ Suta</p>
                  </div>
                 
              </div>
              <h4 className='xar' style={{marginTop:"3vh"}}>Superior Pops | Hand-Picked | Big Size</h4>
              
              
              <div className='row' style={{marginTop:"10vw"}}>
                <div className='col bloack' >
                  <h5>Description</h5>
                </div>
                <div className='col'>
                  <div className='row'>
                  <a style={{textDecoration:"none"}} href={'https://koshaafoods.mini.store'}><div className='boxwholesale'>
                    <h5 className='boxh1'>Buy Now</h5>
                  </div></a>
                  </div>
                  <div className='row'>
                    <p className='xas' style={{padding:"10px",marginTop:"1.8vw"}}>The best blend of hand-picked 5 and 6 suta Makhanas creates an all-time favourite and most popular Makhana variant. Bigger in size, better in taste.   </p>
                  </div>
                </div>
              </div>
  
              {/* 4 logos */}
  
              <div className='row' style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px", marginTop:"10vw"}}>
              
              <div style={{width:"150px",margin:"10px"}}>
                <div className='box' style={{backgroundColor:"",width:"90px",height:"90px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={e} style={{width:"90px",height:"90px"}}></img>
                </div>
                {/* <p> 100% Natural</p> */}
                </div>

              <div style={{width:"150px",margin:"10px"}}>
                <div className='box' style={{backgroundColor:"",width:"90px",height:"90px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={f} style={{width:"90px",height:"90px"}}></img>
                </div>
                {/* <p>Gluten-free</p> */}
                </div>
  
                <div style={{width:"150px",margin:"10px"}}>
                <div className='box' style={{backgroundColor:"#282C32",width:"80px",height:"80px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={h} style={{width:"80px",height:"80px"}}></img>
                </div>
                {/* <p>100% Vegan</p> */}
                </div>
  
               
  
                <div  className="" style={{width:"150px",margin:"10px"}}>
                <div className='box' style={{backgroundColor:"#282C32",width:"80px",height:"80px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={g} style={{width:"80px",height:"80px"}}></img>
                </div>
                {/* <p className=''>Anti-Oxidants</p> */}
                </div>
              </div>
  
              <div className='accordaintype' style={{marginTop:"7vw"}}>
              <hr></hr>
              
              <div className='accordain-type'>
              <div onClick={() => setIsActive(!isActive)} className='accordain-head d-flex justify-content-between' style={{padding:"20px"}}>
              <div>
                <p>Nutritional Info</p>
                </div>
               <div>{isActive ? <img style={{width:"20px",height:"20px"}} src={up}></img> : <img style={{width:"40px",height:"40px"}} src={down}></img>}
                
               </div>
              </div>
  
             {isActive &&  <div className='accordain-content container' style={{width:"80%",marginTop:"30px"}}>
              
              <div className='d-flex justify-content-between'>
              <div>
                <p>Calories</p>
                </div>
               <div>
                <p>350 Kcal</p>
                
               </div>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between'>
              <div>
                <p>Carbohydrate</p>
                </div>
               <div>
                <p>77g</p>
                
               </div>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between'>
              <div>
                <p>Protein</p>
                </div>
               <div>
                <p>10 g</p>
                
               </div>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between'>
              <div>
                <p>Fat</p>
                </div>
               <div>
                <p>0.01 g</p>
                
               </div>
              </div>
  
              <hr></hr>
              <div className='d-flex justify-content-between'>
              <div>
                <p>Fibre</p>
                </div>
               <div>
                <p>14 g</p>
                
               </div>
              </div>
  
              <hr></hr>
              <div className='d-flex justify-content-between'>
              <div>
                <p> Cholesterol</p>
                </div>
               <div>
                <p>0 mg</p>
                
               </div>
              </div>
  
  
              </div>}
              <hr></hr>
              </div>
  
              <div className='accordain-type'>
  
              <div onClick={() => setIsActivee(!isActivee)} className='accordain-head d-flex justify-content-between' style={{padding:"20px"}}>
              <div>
                <p>Health Benefits</p>
                </div>
               <div>{isActivee ? <img style={{width:"20px",height:"20px"}} src={up}></img> : <img style={{width:"40px",height:"40px"}} src={down}></img>}
                
               </div>
              </div>
  
             {isActivee &&  <div className='accordain-content container' style={{width:"80%",marginTop:"30px"}}>
              
              {/* <div className='d-flex justify-content-center'>
              <ul>
                <li>Maintains heart and kidney health</li>
                <li>Good for diabetic patients</li>
                <li>Zero cholesterol</li>
                <li>High fiber for good gut </li>
                <li>Antioxidants preventing early aging</li>
                <li>High in calcium, protein, and iron</li>
                <li>Good for fertility</li>
                <li>Detoxifies liver</li>
              </ul>
              </div> */}

              <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Maintains heart and kidney health</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Good for diabetic patients</p>
              
             </div>
            </div>
            <hr></hr>


            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Zero Cholesterol</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Antioxidants preventing early aging</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>High in calcium, protein, and iron</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Maintains heart and kidney health</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Good for fertility</p>
              
             </div>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-center' style={{padding:"0px"}}>
            
             <div>
              <p>Detoxifies Liver</p>
              
             </div>
            </div>
            <hr></hr>
  
             
              </div>}
              <hr></hr>
              </div>
  
              <div className='accordain-type'>
              
  
              <div className='accordain-type'>
              <div onClick={() => setIsActiveee(!isActiveee)} className='accordain-head d-flex justify-content-between' style={{padding:"20px"}}>
              <div>
                <p>Packaging types available</p>
                </div>
               <div>{isActiveee ? <img style={{width:"20px",height:"20px"}} src={up}></img> : <img style={{width:"40px",height:"40px"}} src={down}></img>}
                
               </div>
              </div>
  
             {isActiveee &&  <div className='accordain-content container' style={{width:"80%",marginTop:"30px"}}>
              
              <div className='d-flex justify-content-start'>
              <div>
                <p>250 g, 1 Kg, 8 Kg</p>
                </div>
               
              </div>
              
              </div>}
              </div>
  
              <hr></hr>
              </div>
  
              
  
              </div>
  
  
  
  
              </div>
              </div>
          </div>
      </div>
      <div className='container-fluid' style={{width:"100%"}}>
      <ProductCard/>
      </div>

      <div className='row' style={{marginBottom:"60px"}}>
    <div className='container text-end' style={{justifyContent:"end",position:"absolute",right:"1%"}}>
       <div className='boxbou' style={{height:"150px"}}>
        <img onClick={handle} src={upa} className='boxbo bounce-1'></img>
       </div>
       </div>
    </div>

      <div className='containe-fluid' style={{width:"100%"}}>
        <Footer></Footer>
      </div>
      </>
    )
}

export default Popular
