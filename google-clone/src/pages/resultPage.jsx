
import googleLogo from "../assets/img/googlelogo.png";
import Navbar from "../components/Navbar";
import { TextSearch } from "../components/SearchZone";

const ResultPanel = () => {
  return (
    <div className="result-panel">
      <div className="logo-container">
        <img className="logo-sm" src={googleLogo} alt="logo-sm" />
      </div>
      <div className="">
        <TextSearch />
      </div>
      <Navbar />
    </div>
  );
};

const ResultPage = () => {
  return (
    <div className="result-page">
      <ResultPanel />
    </div>
  );
};

export default ResultPage;