const Tab = ({ tabInfo, iconData, activeTab, handleTabClick }) => {
    const { tab, tabName } = tabInfo;
    const { iconSrc, inconAlt } = iconData;

    return (
        <li id={tab} className={activeTab === tab ? "tab-item is-active" : "tab-item"}>
            <a href='/' onClick={(e) => handleTabClick(e, tab)}>
                <span className="icon"><img className='' src={iconSrc} alt={inconAlt} /></span>
                <span className="is-hidden-mobile">{tabName}</span>
            </a>
        </li>
    );
}

export default Tab;