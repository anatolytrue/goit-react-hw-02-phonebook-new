import { Notification } from "./NotificationMessage.styled";
import PropTypes from 'prop-types';

export const NotificationMessage = ({message}) => {
    return <div>
        <Notification>{ message}</Notification> 
    </div>
}

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired
}