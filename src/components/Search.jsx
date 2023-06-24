import search from '../img/search-30.png';


function Search(props) {
    return (
        <label className='search-container' {...props}>
            <input className='search-input' type="text" placeholder="Search..."/>
            <button className='search-button'>
                <img src={search} alt="search" className='search-icon'/>    
            </button>
        </label>
    );
}

export default Search;