import React from 'react'
import { useState,useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db,auth} from '../firebase-config'
function Blog() {

  const [postLists,setPostList]=useState([]);
  const postcollectionref=collection(db,"blogs")
  useEffect(()=>{
    const getPosts=async()=>{
        const data=await getDocs(postcollectionref);
        setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    };

    getPosts();
  })
  return (
    <div>
      <h1>Blog page</h1>
      <br></br>
      <div className='container'>
        {postLists.map((post)=>{
            return(<div className='post'>
            <div className='postHeader'>
            <div className='row'>
            <img src={post.url}></img>
            </div>
            <div>
                <h1>{post.title}</h1>
            </div>
            </div>
            <div className='posttext'>{post.content}</div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Blog
