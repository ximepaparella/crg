import Head from "next/head";

const HeadSettings = () => {
  return (
    <Head>
      <title>Centro de Recursos Genéticos</title>
      <meta
        name="description"
        content="Centro de Recursos Genéticos de la Universidad de Ciencias Exactas de la ciudad de Buenos Aires."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default HeadSettings;
