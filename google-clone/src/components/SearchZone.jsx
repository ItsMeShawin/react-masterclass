import googlelogo from "../assets/img/googlelogo.png"
import magnifying from "../assets/img/magnifying.svg"

const GoogleLogo = ()  => {

    return (
        <div className="search-zone">
            <div id="logo" className="row">
                <img src={googlelogo} alt="google-clone" />
            </div>
        </div>
    )
}

const TextSearch = () => {
    return (
        <div id="text-search" className="row">
            <img className="magnifying" src={magnifying} alt="" />
            <input className="searchBox" type="text" />
        </div>
    )
}

const SearchZone = () => {
    return (
        <div className="search-zone">
            <GoogleLogo />
            <TextSearch />
        </div>
    )
}

export default SearchZone;
