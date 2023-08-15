import bg2 from "../Images/bg2.png"

const Search = ({onsearch,onkey}) => {
    return ( 
        <div className="col2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search books here..." 
                    onChange={e=>onsearch(e.target.value)} 
                    onKeyDown={(e)=>onkey(e.key)}
                />
                <button> <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
             <img src={bg2} alt="" />
        </div>
     );
}
 
export default Search;