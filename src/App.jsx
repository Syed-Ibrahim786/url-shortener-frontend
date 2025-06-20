import React, { useRef, useState } from 'react'
import './App.css'
import copy_image from "./assets/copy.png"
import Title from './components/Title/Title'
import axios from "axios"


const App = () => {
  const longURL = useRef()
  const alias = useRef()
  const [aliasError, setAliasError] = useState(false)
  const [shorturl,setShorturl] = useState('')
  const [domain, setDomain] = useState('')
  const [copied,setCopied] = useState(false)
  const getShortURL = async () =>{
    
    try{
        const data = await axios.post("https://shorten-url-backend-npot.onrender.com",{
      longURL:longURL.current.value,
      customAlias:alias.current.value
    })
   console.log(data)
    setShorturl(data.data[0])
    setDomain(data.data[1])
    setAliasError(false)
    }catch(e){
      if(e.response.status === 409){
        setAliasError(true)
      }
     
    }
    
  }

  const copyToClipboard = async () =>{
    const fullURL = `${domain}/${shorturl}`
    try{
        await navigator.clipboard.writeText(fullURL)
        setCopied(true)
    }catch(e){
      console.error("failed to copy", e)
    }
  }
  
  
  return (
    
      <div className='fields'>
      <Title/>
      <div className="container">
        <label htmlFor='input'>🔗Shorten a long URL</label>
        <input onChange={()=>{setCopied(false)}} ref={longURL}  type="text" placeholder='Enter long URL'/>

        <label >🪄Customize your link</label>
        <input onChange={()=>{setCopied(false)}} ref={alias} type="text" placeholder='Enter your Custom Alias     (optional)'/>
     
        {aliasError && (
          <p className='alias_error'>alias already exist Try other one</p>
        )}
        <button className='getlink' aria-label="click to get short url" onClick={getShortURL}>get link</button>
        <p className='shorturl' >
          shortURL : <a  href={`${domain}/${shorturl}`} target="_blank" rel="noopener noreferrer" >{`${domain}${shorturl}`}</a>
          <button aria-label="Copy short URL" style={copied?{outline:"3px solid green"}:{}} onClick={copyToClipboard} className='copy_btn'><img src={copy_image} alt="copy short URL" height="auto" width="auto"/></button>
        </p>
      </div>
      {/* <h4>Number of Clicks:</h4> */}
      </div>
      
 

    
    
  )
}

export default App
