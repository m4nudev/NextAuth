"use client";

import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
    return <div>
        <button onClick={() => signIn()}>signin</button>
        <button onClick={() => signOut()}>signout</button>
    </div>
}