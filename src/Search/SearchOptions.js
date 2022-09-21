import { Fragment, useState } from "react";
import SEOptions from "./Options/SEOptions";
import VideoSearch from "./Options/VideoSearch"
import ScholarSearch from './Options/ScholarSearch'
import Select from "./Options/Select";
import YearInput from "./Options/YearInput";
import SiteFilter from "./Options/SiteFilter";

const SearchOptions = ({ type }) => {
  const [siteSrch, setSiteSrch] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [activeFilter, setActiveFilter] = useState('none');

  function changeFocus(e) {
    if (e.currentTarget.id === 'period-select') {
      setActiveFilter(0);
      console.log('changed focus');
    }
    else if (e.currentTarget.id === 'year-number-input') {
      setActiveFilter(1);
      console.log('changed focus');
    }
  }

  const PeriodField = () => {
    const options = [
      { value: 'a', text: 'Any Time' },
      { value: 'd', text: 'Past 24h' },
      { value: 'w', text: 'Past Week' },
      { value: 'm', text: 'Past Month' },
      { value: 'y', text: 'Past Year' },
    ];

    return (
      <Fragment>
        <div id='period-label' className="field-label">
          <label className="label">Results From</label>
        </div>
        <Select options={options} selected={dateRange}
          setValue={setDateRange} changeFocus={changeFocus}
          isActive={activeFilter === 0}
        />
      </Fragment>
    );
  }

  const YearField = () => {
    return (
      <YearInput value={yearFrom} setValue={setYearFrom} 
      changeFocus={changeFocus} isActive={activeFilter === 1} />
    )
  }

  const FilterField = () => {
    return ( 
      <SiteFilter value={siteSrch} setValue={setSiteSrch} changeFocus={changeFocus} />
     );
  }
   
  return (
    <Fragment>
      {type === 'google' && <SEOptions FirstInput={PeriodField()} SecondInput={YearField()} activeInput={activeFilter} lastInput={FilterField()} />}
      {type === 'duckduckgo' && <SEOptions FirstInput={PeriodField()} SecondInput={YearField()} activeInput={activeFilter} lastInput={FilterField()} />}
      {type === 'maps' && <div></div>}
      {type === 'video' && <VideoSearch />}
      {type === 'academic' && <ScholarSearch />}
    </Fragment>
  );
}

export default SearchOptions;