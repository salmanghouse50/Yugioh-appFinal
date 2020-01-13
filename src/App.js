import React, { useState } from 'react';
import './App.css';
import CardUI from './Components/CardUI';




function App() {
  
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)


  const fileUploadHandler= async e =>{

    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'di5bibokq')
    setLoading(true)
    const res = await fetch(
      ' https://api.cloudinary.com/v1_1/di5bibokq/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file= await res.json()
    
    
    setImage(file.secure_url)
    setLoading(false)
  
    
    }
  return (


    <div className="App">
      <header className="App-header">
        <h1>Yugioh Card Generator</h1>
        <CardUI/>
      </header>
      <div id="imageBtnDiv">
      <input type="file" onChange={fileUploadHandler}/>
      </div>

      <div id="imageId">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '170px', zIndex:9999 }} />
      )}
      </div>
    </div>
  );
}

export default App;
