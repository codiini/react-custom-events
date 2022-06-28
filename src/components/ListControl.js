import { publish } from "../events"

const ListControl = (props) => {

    const showList = () => {
        publish('showList');
    }
    const hideList = () => {
        publish('hideList');
    }

    return (
        <div>
            {props.listState ? <button onClick={hideList}>Hide List</button> : <button onClick={showList}>Show List</button>}
        </div>
    );
}

export default ListControl;
