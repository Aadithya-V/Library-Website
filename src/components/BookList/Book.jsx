import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Book = (book) => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  return (
    <div data-aos="fade-up" data-aos-duration='600' className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>
        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <div>
          <Link to = {`/book/${book.id}`} {...book}>
            <button className='btn desc'>Description</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Book