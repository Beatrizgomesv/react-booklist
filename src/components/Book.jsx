import React from 'react'

const Book = ({img, title, author, price}) => {
    return (
      <article className="book">
     <img src={img} alt=""/>
     <h1>{title}</h1>
     <h4>{author}</h4>
     <h3>{price}</h3>
      </article>
    )
  }

export default Book