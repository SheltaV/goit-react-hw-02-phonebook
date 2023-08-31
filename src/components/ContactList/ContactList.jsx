import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
    return (<ul>{
        items.map(item => <List key={item.id}>
            {item.name}: {item.number}
            <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
        </List>)
    }
</ul>)
}

ContactList.propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })  
    )}