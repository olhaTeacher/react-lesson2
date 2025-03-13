import catPicture from './assets/cat.png'
import './App.css'
import React from 'react'

function App() {

  const head1 = React.createElement('h1', null, "Witout JSX");
  const parag = React.createElement('p', null, "lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore magni voluptates nam")
  const img = React.createElement('img', {src: catPicture, alt: "Cat"})

  return (
    <>
      <h1>JSX Tittle</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore magni voluptates nam sapiente, odio quis quae possimus recusandae voluptas dolores deleniti tempore. Autem, perspiciatis? Laudantium voluptatem vero in recusandae.</p>
      <img src={catPicture} alt="cat_picture" />
      {head1}
      {parag}
      {img}
    </>
  )
}

export default App
