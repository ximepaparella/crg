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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadSettings;
