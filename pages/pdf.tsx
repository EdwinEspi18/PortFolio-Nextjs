import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer: NextPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Head>
        <title>Descargar CV</title>
      </Head>
      <NextLink href='/'> Volver </NextLink>
      <Worker workerUrl='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.2.146/pdf.worker.min.js'>
        <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl='/tarea.pdf' />
      </Worker>
    </>
  );
};
export default PdfViewer;
