import { useState } from 'react'
import axios from 'axios'

export default function LandingPage() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)

    const result = await axios.post('http://localhost:8080/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    setImage(result.data.imagePath)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <input
          onChange={e => setDescription(e.target.value)} 
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
      { image && <img src={image} alt={image}/>}
    </div>
  )
}