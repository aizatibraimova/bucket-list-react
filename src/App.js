import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);
  const [images, setImages] = useState(0)
  const {image} = data[images]

  const removePlace = (id) => {
    let newPlaces = places.filter(place => place.id !== id)
    setPlaces(newPlaces)
  }
  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  const previousImage = () => {
    setImages((images) => {
      images --;
      if (images < 0) {
        images = data.length -1;
      }
      return images;
    })
  }

  const nextImage = () => {
    setImages((images => {
      images ++;
      if (images > data.length -1) {
        images = 0;
      }
      return images;
    }))
  }


  return (
    <div>
      <div className='container'>
        <h1>{places.length} Top Bucket List Destinations</h1>
      </div>

      {places.map((item => {
        const {id, place, description, image, source, showMore} = item;
  
        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {place}</h2>
            </div>

            <div className='container'>
              <p>{showMore ? description : description.substring(0, 220) + "...."}
              <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>

            <div className='container'>
              <img src={image} width="350px" alt='bucket list'/>
            </div>

            <div className='container'>
              <p>{source}</p>
            </div>
            <div className='container'>
              <button onClick={() => removePlace(id)} >Remove</button>

            </div>

          </div>
        )
      }))}
      <div className='container'>
        <button onClick={() => setPlaces([])}>Remove all</button>

      </div>

      <div className='container'>
        <h2>Slide of images from the list</h2>

      </div>

      <div className='container'>
        <img src ={image} width="400px" alt='slide'/>
      </div>
      
      <div className='container btn'>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>

      </div>

    </div>
    
  );
}

export default App;
