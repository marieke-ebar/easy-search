import React, { useState, useEffect } from "react";
import SearchOptions from './SearchOptions'
import searchIcon from './Icons/icons8-search-48.png';
import getSearchRequest from "./redirect";

const SearchForm = ({ searchType, setErrMsge }) => {
  const [query, setQuery] = useState("");
  const [searchMsge, setSearchMsge] = useState('Search');
  const searchOpts = {}

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
    if (['google', 'duckduckgo', 'maps'].includes(searchType))
      doRegularSearch(formData)
  }
  // console.log(JSON.stringify(responseBody));

  function doRegularSearch(formData) {
    formData.forEach((value, property) => searchOpts[property] = value);
    const activeFilter = searchOpts['active-filter']
    if (searchOpts['site-search'].length > 0 && ! isURLCorrect(searchOpts['site-search'])) {
      setErrMsge({ title: 'Site URL Input Error', text: `Please Input a Correct URL for the Website to Search Within.` });
      return;
    }

    if (activeFilter === '0')
      delete searchOpts['year-since'];
    else if (activeFilter === '1') {
      delete searchOpts['period-select'];
      console.dir(JSON.stringify(searchOpts))
      const inputYearNr = searchOpts['year-since'];
      if (inputYearNr.length > 0 && (inputYearNr < 1991 || inputYearNr > new Date().getFullYear())) {
        displayInputError('year-input-error');
        return;
      }
    }

    const newUrl = getSearchRequest(searchType, activeFilter, searchOpts);
    setErrMsge(null);
    window.open(newUrl, '_blank').focus();
  }

  function displayInputError(error) {
    if (error === 'year-input-error')
      setErrMsge({ title: 'Year Input Error', text: `Please Input a Year between 1991 and ${new Date().getFullYear()}.` })
  }

  function isURLCorrect(URL) {
    if (!URL.includes('.') || URL.length < 4) {
      return false;
    }
    else
      return true;
  }

  return (
    <form className="search-form" id="form-app-input" onSubmit={submitRedirect}>
      {searchType &&
        <SearchOptions type={searchType}
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