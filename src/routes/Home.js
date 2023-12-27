import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Experts from "../components/Experts";
import NewsLetter from "../components/NewsLetter";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import Contactdata from "../components/Contactdata";


function Home() {
    return(
        <>
        <Header />
        <Banner />
        <Experts />
        <Plans />
        <NewsLetter />
        <Contactdata />
        <Footer />
        

        </>
    )
}
export default Home