import React from 'react'
import { useRef } from 'react'
import Email from '../assests/icons/email.png'
import '../App.css'
import emailjs from '@emailjs/browser'
import ab from '../assests/icons/OG_White.png'
import a from '../assests/icons/facebook.png'
import b from '../assests/icons/linkedin.png'
import c from '../assests/icons/instagram.png'
import '../css/footer.css'
import { Link } from 'react-router-dom'
function Footer() {

    const form=useRef();

    const sendEmail=(e)=>{
    //     console.log('ffirs')
    //     e.preventDefault();
    //     console.log('ffirsttt')

    //     emailjs.sendForm('service_g1eze8i', 'template_t4llvu5', form.current, 'Qb9dE2rko8hm6bjkc')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert('Koshaa Foods will soon connect with you.')
    //       window.location.replace('/')
    //   }, (error) => {
    //       console.log(error.text);
    //   });
        
    }

    const top=function()
    {
      window.scrollTo(0,0)
    }

    return (
        <div className='container-fluid  fotrow' style={{ width: "100%"}}>
            {/* <div className='row' style={{ width: "100%", height: "15vh", backgroundColor: "red", margin: 0 }}>

            </div> */}
            <div className='row' >
                <div className='container'>
                    <div className='row justify-content-between' style={{ padding: '25px', marginTop: "0px" ,justifyContent:"space-between"}}>
                        <div className='box fotlogo'>
                            <img src={ab} className='fotlogo'></img>
                        </div>

                        <div className='box' style={{ width: "60px", height: "60px", borderRadius: "50px", outlineColor: "whitesmoke", outlineStyle: "solid", border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:"55px"}}>
                            <Link to="/contact"><img src={Email} style={{ width: "30px", height: "30px", color: "white" }}></img></Link>
                        </div>

                    </div>
                    <div className='row' style={{ padding: "20px", marginTop: "" }}>
                        <div className='col-sm-6'>
                            <div className='row'>

                                <div className='col'>
                                    <h6 style={{ color: "white" }}>Menu</h6>
                                    <hr style={{ color: "white", width: "10vw", marginTop: "30px", marginBottom: "30px" }}></hr>
                                   <Link to="/" style={{textDecoration:"none"}}> <p style={{ color: "white", marginBottom: "5px" }}>Home</p><br></br></Link>
                                   <Link to="/products" style={{textDecoration:"none"}}> <p style={{ color: "white", marginBottom: "5px" }}>Classic Variants</p><br></br></Link>
                                   <Link style={{textDecoration:"none"}} href={'https://koshaafoods.blogspot.com/'}><p style={{ color: "white", marginBottom: "5px" }}>Blog</p></Link> 
                                </div>

                                <div className='col'>
                                    <h6 style={{ color: "white" }}>Company</h6>
                                    <hr style={{ color: "white", width: "10vw", marginTop: "30px", marginBottom: "30px" }}></hr>
                                    <Link to="/about" style={{textDecoration:"none"}}><p style={{ color: "white", marginBottom: "5px" }}>About Us</p><br></br></Link>
                                    <Link to="/contact"  style={{textDecoration:"none"}}><p style={{ color: "white", marginBottom: "5px" }}>Register as a Wholesaler</p><br></br></Link>
                                    <p style={{ color: "white", marginBottom: "5px" }}>Privacy Policy</p><br></br>
                                    <p style={{ color: "white", marginBottom: "5px" }}>Terms & Condition</p><br></br>

                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                        <div className='row'>
                            <div className='container' style={{ padding: "10px" }}>
                                <h2 style={{ color: "white" }}>Subscribe to The Koshaa Journal</h2>
                                <p style={{ color: "white", marginTop: "2px" }}>We’ll share the holistic benefits of superfoods and healthy living mantras.</p>
                               <form ref={form} onSubmit={sendEmail}>
                                <div class="input-group" style={{border:"2px solid white",borderRadius:"20px"}}>
                                    <input name="user_email" type="email" class="form-control em" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{backgroundColor:"transparent",border:"0px solid",outline:"none",color:"white"}}/>
                                    
                                    <input type='submit' value='Submit' className='fotsubmit'></input>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='container' style={{ marginTop: "0px" }}>
                                <h2 style={{ color: "white" }}>Connect With Us</h2>
                                {/* <p style={{ color: "white", marginTop: "2px" }}>We’ll share the holistic benefits of superfoods and healthy living mantras.</p> */}
                                <div className='' style={{display:"flex"}}>
                                    <div><a href={'https://www.facebook.com/p/Koshaa-Foods-100088498390843/'}><img style={{height:"40px",width:"40px",margin:"10px"}} src={a}></img></a></div>
                                    <div><a href={'https://www.linkedin.com/company/koshaafoods/'}><img src={b} style={{height:"40px",width:"40px",margin:"10px"}}></img></a></div>
                                    <div><a href={'https://instagram.com/koshaafoods?igshid=YmMyMTA2M2Y='}><img src={c} style={{height:"40px",width:"40px",margin:"10px"}}></img></a></div>
                                </div>
                            </div>
                        </div>
                        <div className='row my-3'>
                <div className='container'>
                    <p style={{color:"white"}}><span style={{fontSize:"bold"}}>Address: </span>Shop no D -24 Ground floor, Hno 876/1, behind Shri Pundalik temple, Pundalik Nagar, Porvorim,</p>
                    <p style={{color:"white",padding:"0px",lineHeight:"0px"}}> Goa 403521</p>
                    <p style={{color:"white"}}><span>Mail</span>: xxx@gmail.com | <span>Customer care:</span> +91 xxxxxxxx</p>
                </div>
            </div>
                        </div>
                    </div>
                    
                    <div className='row justify-content-between' style={{ marginTop: "0px" }}>
                        <div className="col"><p style={{ color: "white", padding: "20px" }}>© 2023 KOSHAA FOODS. All Rights Reserved.</p></div>
                        <div className='col text-center'><p style={{fontSize:"small",color:"white",paddingTop:"20px"}}>"<span style={{fontWeight:"bold"}}>Koshaa Foods</span>” is a registered trademark of Vardhman Fab-Tech.</p></div>

                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer
