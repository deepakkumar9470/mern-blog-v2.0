import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'

const Write = () => {
  const [val,setVal] = useState('')

  const [title,setTitle] = useState('')
  // const [desc,setDesc] = useState('')
  const [file,setFile] = useState(null)
  const [cat,setCat] = useState('')

  const upload =  async () =>{
     try {
    const formData = new FormData()
    formData.append('file', file)
    const res = await axios.post('/posts/upload', formData)
    console.log(res.data)

     } catch (error) {
      console.log(error)
     }
  }
  const handlePublishAdd = async (e) =>{
    e.preventDefault()
    const imgUrl = upload()

    try {
      const res = await axios.post('/posts', {
        title,
        imgUrl,
        cat
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <div className="editorContainer">
        <ReactQuill 
        theme='snow'
        value={val} 
        onChange={setVal}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status :</b> Draft</span>
          <span><b>Visibility :</b> Public</span>

          <input style={{display:'none'}} type="file"  id="file"  onChange={(e)=>setTitle(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handlePublishAdd}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">

        <input  type="radio"  id="art" value="art" name='cat' onChange={(e)=>setCat(e.target.value)} />
        <label htmlFor="art">Art</label>
          </div>
          <div className="cat">

        <input  type="radio"  id="science" value="science" name='cat'  onChange={(e)=>setCat(e.target.value)}/>
        <label htmlFor="science">Science</label>
          </div>
          <div className="cat">

        <input  type="radio"  id="technology" value="technology" name='cat'  onChange={(e)=>setCat(e.target.value)}/>
        <label htmlFor="art">Technology</label>
          </div>
          <div className="cat">

        <input  type="radio"  id="cinema" value="cinema" name='cat'  onChange={(e)=>setCat(e.target.value)}/>
        <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">

        <input  type="radio"  id="design" value="design" name='cat'  onChange={(e)=>setCat(e.target.value)}/>
        <label htmlFor="design">Design</label>
          </div>
          <div className="cat">

        <input  type="radio"  id="food" value="design" name='cat'  onChange={(e)=>setCat(e.target.value)}/>
        <label htmlFor="food">Food</label>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Write