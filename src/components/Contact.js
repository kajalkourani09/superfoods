import React, { useRef } from 'react'
import '../App.css'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import upa from '../assests/icons/arrow-up.png'
import { AnimatePresence } from 'framer-motion'
import contactimage from '../assests/images/contactimage-min.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
function Contact() {

    const form=useRef();
    const refe=useRef(null)

    const handle = () =>{
        refe.current?.scrollIntoView({behavior: 'smooth'});
    }


    const sendEmail=(e)=>{
        console.log('ffirs')
        e.preventDefault();
        console.log('ffirsttt')

        emailjs.sendForm('service_g1eze8i', 'template_xtsm9va', form.current, 'Qb9dE2rko8hm6bjkc')
      .then((result) => {
          console.log(result.text);
          alert('Koshaa Foods will connect with you.')
          window.location.replace('/')
      }, (error) => {
          console.log(error.text);
      });
        
    }

    return (
        <>
        <AnimatePresence>
            <motion.div ref={refe} className='container-fluid' style={{}}
            initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        exit={{opacity:0}}
            >
            
                <div className='container-fluid' style={{ display: "flex",marginBottom:"50px",position:"" }}>
                
                    <div className='row' style={{justifyContent:"center"}}>
                    <div style={{position:"absolute",justifyContent:"center",marginTop:"10px"}}>
      <Navbar ></Navbar>
      </div>
                    
                        <div className='col-sm-6 marcoo'>
                            <div className='boximage' style={{padding:"0px"}}>
                                <img src={contactimage} style={{ height: "100%", width: "100%" ,borderRadius:"40px"}}></img>
                            </div>
                        </div>

                        <div className='col-sm-6 marco'>
                            <div className='contactdetail' style={{padding:"20px",marginTop:"1vw"}}>
                            <h1 className='conth1'>Contact us for Wholesale</h1>
                            <br></br>
                            <p className='contp'>Contact us for assistance with anything from our Makhana/Fox nut to wholesale inquiries. We are always happy to hear from our customers and partners.</p>
                            <div className='entrydetail' style={{marginTop:"40px"}}>
                            {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
                            <form ref={form} onSubmit={sendEmail} >
                            <div className='row'>
                                <input name="user_name" className='abcd' type="text" placeholder='Name'></input>
                                </div>
                                <div className='row'>
                                <input name="user_email" className='abcd' type="email" placeholder='Email'>

                                </input></div>
                                <div className='row'>
                                <input name="user_phone" className='abcd' type="Number" placeholder='Phone Number' ></input>
                                </div>
                                <div className='row'>
                                <input name="user_company" className='abcd' type="text" placeholder='Company Name'></input>
                                </div>
                                <div className='row'>
                                <input name="user_address" className='abcd' type="text" placeholder='Company Address'></input>
                                </div>
                                <div className='row'>
                                <input name="message" className='abcde' type="text" placeholder='Message'></input></div>
                                {/* <input type="submit" value="Send" /> */}
                                {/* <input className='box' type="submit" value="Send" style={{marginTop:"10px",width:"150px",height:"60px",borderRadius:"30px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}><p style={{marginTop:"15px",color:"white"}}>Send</p></input> */}
                                <input className='boxsend' type="submit" value="Send" style={{marginTop:"10px",width:"130px",height:"55px",borderRadius:"30px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",color:"white"}}></input>
                                </form>
                                
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
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

export default Contact
