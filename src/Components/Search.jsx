import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import CardContainer from "./CardContainer";
import { Context } from "../contexts/Context";
import axios from "axios";
import styles from "./Search.module.css";

const Search = () => {
  // let {qer, setArr}=useContext(Context);
  return (
    <div className={styles.rag}>
      <Navbar />
      <CardContainer />
    </div>
  );
};

export default Search;
