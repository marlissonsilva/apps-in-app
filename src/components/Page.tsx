import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Roboto } from 'next/font/google'
import { useState } from "react";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

interface PageProps {
  titulo: string
  subtitulo: string
  children: any
  className?: string
}

export default function Page(props: PageProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <div className={`flex min-h-screen ${roboto.className} `}>
      <Sidebar className={isOpenMenu ? 'flex' : 'hidden'}/>
      <div className={`flex flex-col flex-1`}>
        <Header
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className=" h-16 bg-zinc-800"
          onclick={toggleSidebar}
          isOpen={isOpenMenu}
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
