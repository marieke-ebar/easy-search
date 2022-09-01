import { Fragment } from "react";
import SEOptions from "./Options/SEOptions";
import VideoSearch from "./Options/VideoSearch"
import ScholarSearch from './Options/ScholarSearch'

const ConditionalControls = ({ type, dateRange, setDateRange }) => {
  return (
    <Fragment>
      {type === 'google' && <SEOptions dateRange={dateRange} setDateRange={setDateRange} /> }
      {type === 'duckduckgo' && <SEOptions dateRange={dateRange} setDateRange={setDateRange} /> }
      {type === 'maps' && null}
      {type === 'video' && <VideoSearch />}
      {type === 'academic' && <ScholarSearch />}
    </Fragment>
  );
}

export default ConditionalControls;