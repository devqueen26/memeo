import { useState } from "react"
import { Input } from "./ui/input"

const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)
      const url = URL.createObjectURL(file)
      console.log(url)
      setPreviewUrl(url)
    }
  }

  return (
    <div>
      <Input type="file" name="image" onChange={handleChange} />
      <img src={previewUrl} alt="url" />
    </div>
  )
}

export default Test
