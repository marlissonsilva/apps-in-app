import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface PageProps {
  titulo: string
  subtitulo: string
  children: any
}


export default function Page(props: PageProps) {
  return (
    <div className={`flex  h-screen ${roboto.className}`}>
      <Sidebar />
      <div className={`flex flex-col flex-1`}>
        <Header
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className=" h-16 bg-zinc-800"
        />
        <Content>{props.children}</Content>
        <Footer
          textLeft="Desenvolvido com muito empenho"
          textRight={`Marlisson Silva`}
        />
      </div>
    </div>
  );
}
