import React from 'react'
import styles from "./profile.module.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Profile = () => {
  return (
    <div className={styles.container}>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <small className="text-sm font-medium leading-none">Dave Cooper</small>

    </div>
  )
}

export default Profile