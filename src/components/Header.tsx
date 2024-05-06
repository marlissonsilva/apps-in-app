import { IconMenu2, IconX } from "@tabler/icons-react";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
  className?: string;
  onclick: () => void
  isOpen: boolean
}

export default function Header(props: HeaderProps) {
  return (
    <div className={` flex justify-between items-center
    px-5 py-2
    border-b border-zinc-800  
    ${props.className ?? ""} `}>
      <div className={`flex flex-col `}>
        <h1 className="text-xl font-black">{props.titulo}</h1>
        <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
      </div>
      <button className="sm:hidden"
        onClick={props.onclick}>
        {!props.isOpen ? <IconMenu2 /> : <IconX />}
      </button>
    </div>
  );
}
