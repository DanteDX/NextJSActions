import React from "react";
import {useRouter} from "next/router";

export default function FruitName(){
    const router = useRouter();
    return(
        <div>
            <p>{router.query.name}...{router.query.subname}</p>
            <button onClick={e => router.push('/')}>Go to</button>
        </div>
    )
}