import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Page1() {
    const {user} = useAuth0();
    const addUser = async() => {
        try {
            await fetch("/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: user.name,
                    authID: user.sub
                })
            })
        }
        catch(error) {
            console.log(error);
        }
        
    }
    
    return (
        <button onClick={() => addUser()}>
            Add Gold
        </button>
    )
}