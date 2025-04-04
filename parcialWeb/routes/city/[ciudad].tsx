import { PageProps} from "$fresh/server.ts";
import  Header from "../../components/Header.tsx";
import  Footer from "../../components/Footer.tsx";

export default function CityPage({ params}: PageProps) {
    const country = params.ciudad === "Madrid" ? "España" : "Desconocido";
    const temperatura = "22ºC" //simulado

    return (
        <>
        <Header />
        <main>
            <h1> {params.ciudad}</h1>
            <p>
                Pais: <a href={`/country/${country}`}>{country}</a>
            </p>

            <p>
                Temperatura: {temperatura}
            </p>
        </main>
        <Footer />
        </>
    );
}
