const YearInput = ({isActive, value, setValue, changeFocus}) => {
    return (
        <input id="year-number-input"
            className={isActive ? "input" : "input inactive"}
            name="year-since" type="number" placeholder="Year"
            onFocus={changeFocus}
            value={value} onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default YearInput;