export default function getSearchRequest(searchType, activeFilter, searchData) {
    let newUrl = '';
    const query = searchData['query'];
    let period = '';
    // const query = searchData['']
    if(searchType === 'google') {
        if(activeFilter === '0')
            period = `qdr:${searchData['period-select']}`;
        else if(activeFilter === '1')
            period = `cdr%3A1%2Ccd_min%3A1%2F1%2F${searchData['year-since']}%2Ccd_max%3A&tbm=`;
        newUrl = `https://google.com/search?q=${query}&tbs=${period}`;
    } else if(searchType === 'duckduckgo') {
        newUrl = `https://duckduckgo.com/?q=${query}&df=${period}`;
    }
    return newUrl;
}