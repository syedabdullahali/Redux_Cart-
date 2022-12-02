import './Notification.css'
import { useSelector } from 'react-redux'

function NotificationMessage() {
    const notification = useSelector((state) => state.uiInfo.notification)

    return <div className={"notification " + notification.className} >
        <h3>{notification.title}</h3>
        <h3>{notification.message}</h3>
    </div>





}
export default NotificationMessage