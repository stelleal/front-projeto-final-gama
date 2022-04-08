import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ProductPage } from "../../components/ProductPage";
import "../../components/Navbar/styles";


export default function Product () {
    return(
        <>
            <Navbar />
            <ProductPage />
            <Footer />
        </>
    )
}