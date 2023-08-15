const Modal = ({book,show,onClose}) => {
  
    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    console.log(thumbnail);
    
    return (   <>
        <div className="overlay">
            <div className="overlay-inner">
                <div className="overlay-innerest">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{book.volumeInfo.title}</h1>
                            <h3>{book.volumeInfo.authors}</h3>
                            <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={book.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{book.volumeInfo.description}</h4>
               </div>
            </div>
        </div>
    </>);
}
 
export default Modal;