import React, { useEffect } from 'react'
import { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {auth, db,storage} from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function Create({isAuth}) {

    const [title, setitle]=useState("");
    const [content, setcontent]=useState("")
    const [file, setFile] = useState(null);
    const [progress,setprogress]=useState(null);
    const [url,seturl]=useState("")
    const navigate=useNavigate()
    const postcollectionref=collection(db,"blogs")

    useEffect(() => {
      const uploadFile = () => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setprogress(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {

            
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              // toast.info("Image upload to firebase successfully");
              seturl(downloadUrl);
              // setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
            });
          }
        );
      };
  
      file && uploadFile();
    }, [file]);
  
    // useEffect(() => {
    //   id && getBlogDetail();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id]);



    async function createpost(e){
        e.preventDefault()
        await addDoc(postcollectionref,{title,content,url,author:{name:auth.currentUser.email,id:auth.currentUser.uid}});
        navigate('/blog')  
    };

    // useEffect(()=>{
    //     if(!isAuth){
    //         navigate('/login');
    //     }
    // },[])

  
  
    return (
    <div>
      <h1 className='text-center'>CREATE BLOGS</h1>
      <div className='container'>
        <div className='row'>
            <input type='text' placeholder="ENter title" onChange={(e)=>setitle(e.target.value)}>

            </input>
        </div>
        <div className='row'>
            <input type='text' placeholder='Enter blog' onChange={(e)=>setcontent(e.target.value)}></input>
        </div>

        <div className='row'>
        <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
        </div>

        <button type='submit' disabled={progress !==null && progress<100} onClick={createpost}>Submit</button>
      </div>
    </div>
  )
}

export default Create
