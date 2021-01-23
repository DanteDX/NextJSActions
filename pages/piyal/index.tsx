import React from "react";
import styles from "./piyal.module.scss";
import axios from 'axios';

const Piyal = () =>{
    const activator = async(e) =>{
        try{
            const res = await axios.get('/api/hello');
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className={styles.wrapper}>
            <button onClick={e => activator(e)}>Click here to activate API</button>
        </div>
    )
}

export default Piyal;