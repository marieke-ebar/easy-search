import React, { useState, useEffect } from "react";
import ConditionalControls from './ConditionalControls'
import searchIcon from './Icons/icons8-search-48.png';
import getSearchRequest from "./redirect";

const SearchForm = ({ searchType }) => {
  const [query, setQuery] = useState("");
  const [siteSrch, setSiteSrch] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [searchMsge, setSearchMsge] = useState('Search');
  const responseBody = {}

  useEffect(() => {
    const ENUM_SearchText = {
      'google': 'Search using Google',
      'duckduckgo': 'Search the web without being tracked',
      'maps': 'Search Google Maps'
    };

    setSearchMsge(ENUM_SearchText[searchType])
  }, [searchType])

  function submitRedirect(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, property) => responseBody[property] = value);
    const activeFilter = responseBody['active-filter']
    console.log(activeFilter + 'werwee')
    if(activeFilter === '0')
      delete responseBody['year-since'];
    else if(activeFilter === '1')
      delete responseBody['period-select'];
    getSearchRequest(searchType, activeFilter, responseBody);
    // console.log(JSON.stringify(responseBody));
  };

  return (
    <form className="search-form" id="form-app-input" onSubmit={submitRedirect}>
      {searchType &&
        <ConditionalControls type={searchType}
          dateRange={dateRange} setDateRange={setDateRange}
          siteSrch={siteSrch} setSiteSrch={setSiteSrch}
        />}

      <div id="query-text" className="field has-text-centered">
        <p className="control has-icons-right">
          <input required className="input" value={query} onChange={(e) => setQuery(e.target.value)} name="query" type="text" placeholder={searchMsge} />
          <span className="icon is-small is-right vertical-center">
            <img className="input-icon ml-2" alt="add" src={searchIcon} />
          </span>
        </p>
        <input id="form-submit" type="submit" />
      </div>


      {/* <div className="field-label is-normal">
                  <label className="label">Genre</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input required name="genre" className="input" type="text" placeholder="Genre" />
                    </p>
                  </div> */}

      {/* </div> */}
    </form>
  );
}

export default SearchForm;