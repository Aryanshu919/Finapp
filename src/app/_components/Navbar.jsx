"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Navbar(){
    const {user , isSignedIn } = useUser();
    return ( 
        <div className="p-5 flex justify-between border shadow-sm items-center">
            <div className="flex items-center gap-1">
                <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25}/>
                <span className="font-bold text-2xl text-blue-800">FinanSmart</span> 
            </div>
            {
                isSignedIn ? (<UserButton/>) :
                (
                   <div className="flex items-center gap-3">
                        <Link href="/dashboard">
                            <Button variant="outline" className="rounded-full">dashboard</Button>
                        </Link>

                        <Link href="/dashboard">
                            <Button className="rounded-full">Get Started</Button>
                        </Link>
                   </div>
                )
            }
            
        </div>
    )
}
