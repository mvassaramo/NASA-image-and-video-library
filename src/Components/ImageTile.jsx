import React from 'react'

const ImageTile = (props) => {
  console.log('props', props.item.data[0])
  const { title, description } = props.item.data[0]
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )
}

export default ImageTile