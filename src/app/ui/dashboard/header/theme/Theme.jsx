"use client"

import React, { useState } from 'react'
import styles from "./theme.module.css"
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

const Theme = () => {

  const[darkMode ,setDarkMode] = useState(null);

  const setMode = (status)=>{
      setDarkMode(status)
  }

  return (
    <div className={styles.container}>
        <Switch onCheckedChange={setMode} />
       { darkMode ? <Moon/> : <Sun />}
    </div>
  )
}

export default Theme