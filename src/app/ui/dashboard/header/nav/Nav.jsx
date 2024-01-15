"use client"

import React from 'react'
import styles from "./nav.module.css"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
  

const Nav = () => {
  return (
    <div>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/music">Music</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/music">Podcast</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/music">Live</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default Nav