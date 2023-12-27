import React, { useEffect,useState } from 'react'
import { List } from 'semantic-ui-react'
import PhotosService from '../services/photosService'

export default function Photos() {
    const[photos,setPhotos] = useState([])
    useEffect(()=>{
        let photosService = new PhotosService()
        photosService.getToPhotos().then(result=>setPhotos(result.data))
    })
  return (
    <div>
      <List>
    {
        photos.map(photos=>(
            <List.Item>{photos.title}<br></br>{photos.url}</List.Item>
        ))
    }
      </List></div>
    
  )
}
