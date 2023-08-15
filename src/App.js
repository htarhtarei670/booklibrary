import Home from "./Component/Home";
import BookList from "./Component/BookList";
import { useState } from "react";
import axios from "axios";

function App() {
  const [search,setSearch]=useState();
  const [searchBook,setSearchBook]=useState([]);

  const searchKey=(key)=>{
    if(key==="Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAbcyEAa-NaXk9fJtGB5yQm2PzupgStFZ4')
        .then((res)=>setSearchBook(res.data.items))
        .catch((err)=>console.log(err))
      }
  } 
   
  return (
    <div className="App">
      <Home onSearch={setSearch} onKey={searchKey}/>
      <BookList books={searchBook} />
    </div>
  );
}

export default App;

// AIzaSyAbcyEAa-NaXk9fJtGB5yQm2PzupgStFZ4
