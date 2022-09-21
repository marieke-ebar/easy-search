import React, { useState } from "react";

import logo from './web-search-4291.png';
import googIcon from './Icons/icons8-google-240.png'
import mapsIcon from './Icons/icons8-google-maps-240.png'
import duckIcon from './Icons/icons8-duckduckgo-240.png'
import videoIcon from './Icons/icons8-video-64.png'
import scienceIcon from './Icons/research.png'
import './search.scss';
import SearchForm from './SearchForm';
import Tab from './Tab';

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("google");
  const [errorMessage, setErrMsge] = useState(null);

  function handleTabClick(e, tab) {
    e.preventDefault();
    setActiveTab(tab);
    console.log(tab)
  };

  function deleteErr() {
    setErrMsge(null);
  }

  return (
    <div className="search-page">
      <header className="horizontal-center has-text-centered mb-6">
        <img className='py-3 mt-6' id='logo' src={logo} alt="Easy Web Search Logo" />
        <h1 className="title size-2">
          Easy Web Search
        </h1>
      </header>

      <article>
        <div className="container">
          <div className="search-layout">

            <div className="tabs is-medium is-toggle">
              <ul>
                <Tab tabInfo={{ tab: 'google', tabName: 'Google' }}
                  iconData={{ iconSrc: googIcon, iconAlt: 'Google Search' }}
                  activeTab={activeTab} handleTabClick={handleTabClick}
                />
                <Tab tabInfo={{ tab: 'duckduckgo', tabName: 'DuckDuckGo' }}
                  iconData={{ iconSrc: duckIcon, iconAlt: 'DuckDuckGo Search Icon' }}
                  activeTab={activeTab} handleTabClick={handleTabClick}
                />

                <Tab tabInfo={{ tab: 'maps', tabName: 'Google Maps' }}
                  iconData={{ iconSrc: mapsIcon, iconAlt: 'Google Maps Search Icon' }}
                  activeTab={activeTab} handleTabClick={handleTabClick}
                />
                <Tab tabInfo={{ tab: 'video', tabName: 'Video Search' }}
                  iconData={{ iconSrc: videoIcon, iconAlt: 'Web Video Search Icon' }}
                  activeTab={activeTab} handleTabClick={handleTabClick}
                />

                <Tab tabInfo={{ tab: 'academic', tabName: 'Research' }}
                  iconData={{ iconSrc: scienceIcon, iconAlt: 'Academic Papers Search Icon' }}
                  activeTab={activeTab} handleTabClick={handleTabClick}
                />
                {/* <a href="https://www.flaticon.com/free-icons/research" title="research icons">Research icons created by Freepik - Flaticon</a> */}
              </ul>
            </div>
            <div className="wrapper">

              <div className="search-form-box">
                <SearchForm searchType={activeTab} setErrMsge={setErrMsge} />
              </div>
            </div>

          </div>

        </div>

      </article>

      <div className="error-wrapper">
        {errorMessage && <article className="message is-warning error-msge">
          <div className="message-header">
            <p>{errorMessage.title}</p>
            <button className="delete" aria-label="delete" onClick={deleteErr} ></button>
          </div>
          <div className="message-body">
            {errorMessage.text}
          </div>
        </article>}
      </div>

    </div>
  );
}

export default SearchPage;