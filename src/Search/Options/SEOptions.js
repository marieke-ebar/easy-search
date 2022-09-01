import { Fragment, useState } from 'react';
import Select from './Select';

const SEOptions = ({ dateRange, setDateRange }) => {
    let options = [
        { value: 'd', text: 'Past 24h' },
        { value: 'w', text: 'Past Week' },
        { value: 'm', text: 'Past Month' },
        { value: 'y', text: 'Past Year' },
    ];

    function changeFocus(e) {
        if (e.currentTarget.id === 'yr-select')
            setActiveFilter(0);
        else if (e.currentTarget.id === 'yr-number')
            setActiveFilter(1);
    }

    const [activeFilter, setActiveFilter] = useState(0);

    // useEffect(() => {
    //     setDateRange(options[0])
    // }, [])

    return (
        <Fragment>
            <div className="search-options field is-horizontal">
                <div id='period-label' className="field-label">
                    <label className="label">Results From</label>
                </div>
                <Select options={options} selected={dateRange}
                    setValue={setDateRange} changeFocus={changeFocus}
                    isActive={activeFilter === 0}
                />
                <div id='year-label' className="field-label">
                    <label className="label">Year Since</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <p className="control">
                            <input id="yr-number"
                                className={activeFilter === 1 ? "input" : "input inactive"}
                                name="year-since" type="number" placeholder="Year"
                                onFocus={changeFocus}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div id="site-filter" className="search-options field is-horizontal">
                <div className="field-label">
                    <label className="label">Within Website</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input" name="site-search" type="text" placeholder="Website" />
                        </p>
                    </div>
                </div>
            </div>
            <input type="number" readOnly id="active-filter-data" name="active-filter" value={activeFilter} />
        </Fragment>
    )
}

export default SEOptions;