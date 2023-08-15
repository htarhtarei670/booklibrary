import Search from "./Search";

const Home = ({onSearch,onKey}) => {
    return (
        <div className="home">
            <div className="col1">
                <h2>A room without books is like <br/> a body without a soul</h2>
            </div>
            <Search onsearch={onSearch} onkey={onKey}/>
        </div>
    );
}

export default Home;