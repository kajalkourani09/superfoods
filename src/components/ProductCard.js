import React from 'react'
import '../App.css'
import pop from '../assests/images/popular.png'
import ess from '../assests/images/essential.png'
import cru from '../assests/images/crunchy.png'
import Front from '../assests/images/Front-min.png'
import { Link } from 'react-router-dom'


function ProductCard() {


    return (
        <>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <p className='productcardmain' style={{ marginTop: "50px" }}>Our Classic Variants</p>
                </div>

                <div className='row' style={{width:"100%",margin:"auto",marginTop:"40px",marginBottom:"20px"}}>
                    <div className="cardsmain container">

                    <div className='cardcont'>
                        
                        <div>
                        <div className='row xa'>
                            <h3 style={{padding:"2vw",fontSize:"4vw",marginLeft:"2vw"}}>Gourmet</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <img className='' src={Front} style={{width:"80%",height:"80%"}}></img>
                        </div>
                        {/* <div className='row'> */}
                            <a href={"http://koshaafoods.com/products/gourmet"} style={{textDecoration:"none"}}><div className='box viewmore' style={{}}><p style={{color:"white",marginTop:"7px"}}>View</p></div></a>
                        {/* </div> */}
                        </div>
                    </div>


                    <div className='cardcont'>
                        
                        <div>
                        <div className='row'>
                            <h3 style={{padding:"2vw",fontSize:"4vw",marginLeft:"2vw"}}>Popular</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <img className='' src={pop} style={{width:"80%",height:"80%"}}></img>
                        </div>
                        {/* <div className='row'> */}
                        <a href={"http://koshaafoods.com/products/popular"} style={{textDecoration:"none"}}><div className='box viewmore' style={{}}><p style={{color:"white",marginTop:"7px"}}>View</p></div></a>
                        {/* </div> */}
                        </div>
                    </div>

                    <div className='cardcont'>
                        
                        <div>
                        <div className='row'>
                            <h3 style={{padding:"2vw",fontSize:"4vw",marginLeft:"2vw"}}>Essential</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <img className='' src={ess} style={{width:"80%",height:"80%"}}></img>
                        </div>
                        {/* <div className='row'> */}
                        <a href={"http://koshaafoods.com/products/essential"} style={{textDecoration:"none"}}><div className='box viewmore' style={{}}><p style={{color:"white",marginTop:"7px"}}>View</p></div></a>
                        {/* </div> */}
                        </div>
                    </div>

                    <div className='cardcont'>
                        
                        <div>
                        <div className='row'>
                            <h3 style={{padding:"2vw",fontSize:"4vw",marginLeft:"2vw"}}>Crunchy</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <img className='' src={cru} style={{width:"80%",height:"80%"}}></img>
                        </div>
                        {/* <div className='row'> */}
                        <a href={"http://koshaafoods.com/products/crunchy"} style={{textDecoration:"none"}}><div className='box viewmore' style={{}}><p style={{color:"white",marginTop:"7px"}}>View</p></div></a>
                        {/* </div> */}
                        </div>
                    </div>
                    
                    {/* <div className='cardcont' style={{width:"35vw",height:"43vw",backgroundColor:"blue",margin:"10px"}}>
                        
                    </div> */}
                    
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ProductCard
