"use client"
import React, { useContext } from "react";
import { UserButton } from "@clerk/nextjs";
import { UserDetailContext } from '../../_context/UserDetailContext';
import Link from "next/link";

function Header({ children }) {
    const { userDetail } = useContext(UserDetailContext);
    console.log(userDetail);

    return (
        <div className="navbar bg-base-100 flex flex-wrap items-center justify-between p-4">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
                <Link href="/" className="btn btn-ghost text-xl">
                    SmartFarming AI
                </Link>
            </div>

            {/* Right: Combined Action Buttons + User Icon */}
            <div className="flex items-center gap-4">
                {/* Action Buttons (aligned to right) */}
                <div className="flex gap-2 sm:gap-4">
                    <Link href="/dashboard/buy-credits" className="btn btn-outline btn-sm sm:btn-md">
                        Buy More Credits
                    </Link>
                    <button className="btn btn-sm sm:btn-md">
                        <div className="badge badge-secondary mr-2">
                            {userDetail?.credits ?? 0}
                        </div>
                        Credits left
                    </button>
                </div>

                {/* User Icon */}
                <div>
                    <UserButton />
                </div>
            </div>
        </div>
    );
}

export default Header;