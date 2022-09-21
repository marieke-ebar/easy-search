const SiteFilter = ({ value, setValue }) => {
    return ( 
        <input className="input" name="site-search" type="text" placeholder="Website" value={value} onChange={(e) => setValue(e.target.value)} />
     );
}
 
export default SiteFilter;