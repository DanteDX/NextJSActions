import React from "react";
import {useRouter} from "next/router";
import {GetStaticProps, GetStaticPaths} from "next";

export const getStaticProps: GetStaticProps = async(context) =>{
    return{
        revalidate:10,
        props:{
            MyNumber: Math.floor(Math.random() * 100)
        }
    }
};

export const getStaticPaths: GetStaticPaths = async() =>{
    return{
        paths:[
            {params:{name:'sheldon',subname:'cooper'}},
            {params:{name:'big',subname:'show'}}
        ],
        fallback: true
    }
};

export default function FruitName(props){
    const router = useRouter();
    if(router.isFallback){
        return <p>Loading....</p>
    }
    return(
        <div>
            <p>{router.query.name}...{router.query.subname}</p>
            <p>props.MyNumber is {props.MyNumber}</p>
            <button onClick={e => router.push('/')}>Go to</button>
        </div>
    )
}

