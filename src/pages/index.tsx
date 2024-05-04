
import Page from "@/components/Page";
import { IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";

export default function Home() {
  return (
    <Page
      titulo="Projetos React e TailwindCSS"
      subtitulo="Bem Vindos"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex items-center gap-5">
          <IconBrandReact size={200} stroke={1} /> +
          <IconBrandTailwind size={200} stroke={1} />
        </div>

        <span
          className={`
          text-zinc-500  font-black text-center   
        `}
        >
          Aplicações com React e TailwindCSS
        </span>
        <span
          className={`
          text-zinc-500 text-base text-center py-4     
        `}
        >
          Pequenas aplicações para reforçar meu aprendizado!
        </span>
      </div>
    </Page>
  );
}
