import { Fragment } from 'react';

const SEOptions = ({ FirstInput, SecondInput, activeInput, lastInput }) => {
    return (
        <Fragment>
            <div className="search-options field is-horizontal">
                {FirstInput}
                <div id='year-label' className="field-label">
                    <label className="label">Year Since</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <p className="control">
                            {SecondInput}
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
                            {lastInput}
                        </p>
                    </div>
                </div>
            </div>
            <input type="number" readOnly id="active-filter-data" name="active-filter" value={activeInput} />
        </Fragment>
    )
}

export default SEOptions;