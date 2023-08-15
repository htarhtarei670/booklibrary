import Book from "./Book";

const BookList = ({books}) => {
    return ( 
        <div className="container">
            {
                books.map((book)=><Book key={book.id} book={book}/>)
            }
        </div>
     );
}
 
export default BookList;