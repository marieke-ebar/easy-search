export default function getSearchRequest(searchType, activeFilter, searchData) {
    let newUrl;
    if (searchType === 'google') {
        newUrl = getGoogleURL(searchData, activeFilter);
    } else if (searchType === 'duckduckgo') {
        newUrl = getDDGUrl(searchData, activeFilter);
    }
    return newUrl;
}

function getGoogleURL(searchData, activeFilter) {
    let query = searchData['query'];
    if(searchData['site-search'].length > 0) {
        query = `${query}+site:${searchData['site-search']}`;
    }
    let periodStr = '';
    if (activeFilter === 'none' || searchData['period-select'] === 'a')
        return `https://google.com/search?q=${query}`;
    else if (activeFilter === '0')
        periodStr = `qdr:${searchData['period-select']}`;
    else if (activeFilter === '1')
        periodStr = `cdr%3A1%2Ccd_min%3A1%2F1%2F${searchData['year-since']}%2Ccd_max%3A&tbm=`;
    return `https://google.com/search?q=${query}&tbs=${periodStr}`;
}

function getDDGUrl(searchData, activeFilter) {
    let query = searchData['query'];
    let periodStr = '';
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    if(day.toString().length < 2)
        day = "0" + day;
    if(month.toString().length < 2)
        month = "0" + month;
    const currentDateFormatted = `${now.getFullYear()}-${month}-${day}`;
    console.log(currentDateFormatted);

    if(searchData['site-search'].length > 0) {
        query = `${query}+site:${searchData['site-search']}`;
    }
    if (activeFilter === 'none' || searchData['period-select'] === 'a')
        return `https://duckduckgo.com/?q=${query}`;
    else if (activeFilter === '0')
        periodStr = `df=${searchData['period-select']}`;
    else if (activeFilter === '1')
        periodStr = `df=${searchData['year-since']}-01-01..${currentDateFormatted}`;
    console.log(`https://duckduckgo.com/?q=${query}&${periodStr}`);
    return `https://duckduckgo.com/?q=${query}&${periodStr}`;
}