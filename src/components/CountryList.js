const CountryList = (props) => {

    return (
        <ul>
            <h2>List of countries in Africa</h2>
            {props.listData.map((el) => {
                return (
                    <li key={el.tld}>
                        <span><img src={el.flags.svg} alt={el.name.common} style={{ width: "20px", marginRight: "5px" }} /></span>
                        <span style={{fontSize: "20px"}}>{el.name.common} </span>
                    </li>
                );
            })}
        </ul>
    );
}
export default CountryList;

