


const SearchBox = ({ searchChange}) => {
    return(
        <div>
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}
            ></input>

        </div>
    );
}

export default SearchBox;