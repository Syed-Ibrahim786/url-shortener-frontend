import  { useRef, useState } from 'react'
import './App.css'
import copy_image from "./assets/copy.png"
import Title from './components/Title/Title'
import axios from "axios"
import { Copy } from 'lucide-react'


const App = () => {
  const longURL = useRef()
  const alias = useRef()
  const [aliasError, setAliasError] = useState(false)
  const [shorturl,setShorturl] = useState('')
  const [domain, setDomain] = useState('')
  const [copied,setCopied] = useState(false)
  const [status, setStatus] = useState("get Link")
  const getShortURL = async () =>{
    setStatus("loading...")
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
        setAliasError(true)

    }
    setStatus("get Link")
    
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
    <main className=" w-full h-screen  flex justify-center items-center">

      <form className=' bg-card w-[90%] mx-auto  rounded-lg p-6 flex flex-col gap-6'>
      <section className=' flex flex-col gap-2'>
        <label htmlFor='input' className=' text-accent'>🔗Shorten a long URL</label>
        <input onChange={()=>{setCopied(false)}} ref={longURL}  type="text" placeholder='Enter long URL' className='text-main border-2 border-light w-full p-4 rounded-lg' required/>
      </section>

      <section className=' flex flex-col gap-2'>
        <label className=' text-accent' >🪄Customize your link</label>
        <input onChange={()=>{setCopied(false)}} ref={alias} type="text" placeholder='Enter your Custom Alias     (optional)' className='text-main border-2 border-light w-full p-4 rounded-lg' required/>
      </section>
     
      <section className=''>

        {aliasError && (
          <p className=' text-red-400'>alias already exist Try other one</p>
        )}



        <button className=' w-full bg-primary p-4 rounded-lg text-main' title='click for short link' aria-label="click to get short url" type="submit" onClick={() => {
          getShortURL();
        
        }}>{status}</button>
      </section>


        <section className='text-accent  flex flex-col gap-2 items-center justify-between  ' >
          <section>
            shortURL : 
            </section>
          <section className='overflow-x-scroll w-full'>
            <a aria-label="click for redirection" className='' href={`${domain}/${shorturl}`} target="_blank" rel="noopener noreferrer" >{`${domain}${shorturl}`}</a>
            </section>
          
          
          <button aria-label="Copy short URL" style={copied?{outline:"3px solid green"}:{}} onClick={copyToClipboard} className='flex gap-2 bg-primary-light text-main w-fit p-2 rounded-lg mt-6'><Copy className=''/> {copied?"copied":"copy"}</button>
        </section>
    
      </form>
    </main>
      
 

    
    
  )
}

export default App
