export const Filter = ({items, addFilter}) => {
    return (<div>
        <p>Find contacts by name</p>
        <input type="text" value={items} onChange={evt => addFilter(evt.target.value)} />
    </div>)
}