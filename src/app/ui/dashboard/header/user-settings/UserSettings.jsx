import React from 'react'
import styles from "./userSettings.module.css"
import { Bell, Settings } from 'lucide-react'
import Profile from './profile/Profile'
import Theme from '../theme/Theme'

const UserSettings = () => {
  return (
    <div className={styles.container}>
        <Bell />
        <Settings />
        <Theme/>
        <Profile/>
    </div>
  )
}

export default UserSettings