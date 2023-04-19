import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import styles from './preloader.module.css';


const Preloader = () => {
	return (
		<img className={styles.default_preloader} src={preloader} alt='preloader'/>
	);
};

export default Preloader;