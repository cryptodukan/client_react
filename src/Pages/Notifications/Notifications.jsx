import React from 'react'
import './style.scss'

// @components
import NotificationCard from '../../Components/NotificationCard/NotificationCard'
import { Divider } from '@material-ui/core'

export default function Notifications() {
    return (
        <div className="notifications">
            <h1>Notifications</h1>

            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
            <NotificationCard/>
            <Divider/>
        </div>
    )
}
