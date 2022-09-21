const Select = ({ options, selected, setValue, isActive, changeFocus }) => {
    function handleChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="field">
            <div className="control">
                <div className={isActive ? "select is-info" : "select is-info inactive"}>
                    <select id="period-select" name="period-select" 
                        value={selected}
                        onClick={changeFocus} onChange={handleChange}
                        className={isActive ? "" : "inactive"}
                    >
                        <option value="" disabled>Select Period</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Select;