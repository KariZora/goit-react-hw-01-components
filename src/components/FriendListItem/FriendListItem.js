import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
   const spanClasses = [styles.status];
    if (isOnline === false) {
        spanClasses.push(styles.offLine)
    }
    return <li className = {styles.item}>
        <span className = {spanClasses.join(' ')}></span>
        <img className = {styles.avatar} src={avatar} alt={name} width="48" />
        <p className = {styles.name}>{name}</p>
    </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}