import { useState, useEffect } from "react";
import googleLogo from "../assets/img/googlelogo.png";
import magnifying from "../assets/img/magnifying.svg";

const GoogleLogo = () => {
  return (
    <div id="logo" className="row">
      <img src={googleLogo} alt="google-logo" />
    </div>
  );
};

const TextSearch = (props) => {  
  const {setPreview} = props

  return (
    <div id="text-search" className="row">
      <img className="magnifying" src={magnifying} alt="magnifying" />
      <input className="searchbox" type="text" onChange={(e) => setPreview(e.target.value)} />
    </div>
  );
};

const SearchZone = () => {
  const [preview, setPreview] = useState("")
  
  return (
    <div className="search-zone">
      <GoogleLogo />
      <TextSearch setPreview={setPreview}/>
      <br />
      <span>Suggestion-123456789: {preview}</span>
    </div>
  );
};

export { TextSearch };
export default SearchZone;