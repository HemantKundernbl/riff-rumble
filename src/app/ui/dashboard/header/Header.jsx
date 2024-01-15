import React from 'react'
import styles from "./header.module.css"
import Nav from "./nav/Nav"
import { Input } from '@/components/ui/input'
import UserSettings from './user-settings/UserSettings'

const Header = () => {
  return (
    <div className={styles.container}>
      <Nav/>
      <Input/>
      <UserSettings/>
    </div>
  )
}

export default Header