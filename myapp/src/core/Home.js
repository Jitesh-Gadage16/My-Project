import React from "react";
import "../styles.css";
import { API } from "../backend";
import Nav from "./Nav";
import Footer from "./Footer";
import '../styles.css'
import Slider from "./Slider";
import Ourproducts from './Ourproducts'









export default function Home() {

  console.log("API is", API);
  return (
    <div>
      <Nav />
      <Slider />
      <Ourproducts />
      <Footer />
    </div>
  );
}
