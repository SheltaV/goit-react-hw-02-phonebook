import PropTypes from 'prop-types';

export const ContactList = ({ items, onDelete }) => {
    return (<ul>{
        items.map(item => <li key={item.id}>
            {item.name}: {item.number}
            <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
        </li>)
    }
</ul>)
}

ContactList.propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                number: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })  
    )}