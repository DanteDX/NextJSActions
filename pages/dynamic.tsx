import React from 'react';
import {GetStaticProps} from "next";
import path from 'path';

export const getStaticProps: GetStaticProps = async(context) =>{
    const fs = require('fs');
    const txt = fs.readFileSync(path.join(process.cwd(),'public/info.txt'),'utf8');
    return{
        revalidate:10,
        props:{
            info: txt
        }
    }
};

export default function Dynamic(props){
    console.log(props);
    return(
        <div>{props.info}...{props.hello}</div>
    )
};
