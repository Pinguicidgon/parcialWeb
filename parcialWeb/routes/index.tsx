import { Handlers, PageProps } from "$fresh/server.ts";
import  Header from "../components/Header.tsx";
import  Footer from "../components/Footer.tsx";


type Data = {
  error?: string;
  phone?: string;
  country?: string;
};

export const handler : Handlers<Data> = {
  async POST(req, ctx) {
    const form = await
    req.formData();
    const phone = form.get("phone")?.toString() ?? "";
    if (!phone.match(/^\+\d{7,15}$/)){
      return ctx. render ({ error: "Numero de telefono incorrecto."});
    }

    //Si es de España
    const country=phone.startsWith("+34") ? "España" : "Desconocido";
    return ctx. render ({ phone, country});
  },
};

export default function Home({ data }: PageProps <Data>) {
  return (
    <>
    <Header />
    <main>
      <form method="POST">
        <input name="phone" type="text" placeholder="Ej: +34600111222" />
        <button type="submit">Enviar</button>
      </form>

      {data?.error && <p style= {{color: "red" }} >{data.error}</p>}
      {data?.country && ( <>
      <p>Número: {data.phone}
        </p>
        <p>País: <a href={`/country/${data.country}`} >{data.country} </a>
        </p>
        </>
      )}
    </main>
    <Footer />
    </>
  );

}

