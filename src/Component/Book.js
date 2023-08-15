import { useState } from "react";
import Modal from "./Modal";

const Book = ({book}) => {
    const [show,setShow]=useState(false);
    const bookName=book.volumeInfo.title;
    const bookImage=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className="card" onClick={() => {setShow(true)}}>
                <img src={bookImage} alt="" />
                <h4>{bookName}</h4>
                <button>More Detail</button>
            </div>
            {show && <Modal book={book} onClose={()=>setShow(false)} />}
        </>
      );
}
 
export default Book;