import { PageProps} from "$fresh/server.ts";
import  Header from "../../components/Header.tsx";
import  Footer from "../../components/Footer.tsx";

export default function CountryPage({ params}: PageProps) {
    const pais = decodeURIComponent(params.pais);
    const capital = pais === "España" ? "Madrid" : "Desconocida";

    return (
        <>
        <Header />
        <main>
            <h1> {pais}</h1>
            <p>
                Capital: <a href={`/city/${capital}`}>{capital}</a>
            </p>
        </main>
        <Footer />
        </>
    );
}
