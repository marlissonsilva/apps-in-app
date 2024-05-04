interface HeaderProps {
  titulo: string;
  subtitulo: string;
  className?: string;
}
// uso de props em componentes
export default function Header(props: HeaderProps) {
  // console.log(props);
  return (
    <div
      className={`
        flex flex-col 
        justify-center px-5 py-2
        border-b border-zinc-700
        ${props.className ?? ""} 
      `}
    >
      <h1 className="text-xl font-black">{props.titulo}</h1>
      <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
    </div>
  );
}
