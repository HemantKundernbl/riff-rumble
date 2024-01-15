import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Header from '../ui/dashboard/header/Header'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'

const layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Header/>
        {children}
      </div>
    </div>
    
  )
}

export default layout