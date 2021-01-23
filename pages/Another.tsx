import styles from "../styles/another.module.scss";

const Another = () =>{
    return(
        <div className={styles.wrapper}>
            <p>This is a p tag within another comp(should be red)</p>
            <h4>This is a h4 tag within another comp(should be blue)</h4>
        </div>
    )
}
export default Another;