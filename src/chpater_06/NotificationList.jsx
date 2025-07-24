import React from "react";
import Notification from './Notification';

const reservedNotifications = [
    { id : 1, message: "Notification 1" },
    { id : 2, message: "Notification 2" },
    { id : 3, message: "Notification 3" },
    { id : 4, message: "Notification 4" },
    { id : 5, message: "Notification 5" },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification, index) => {
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />;
                })}
            </div>
        );
    }
}


export default NotificationList;