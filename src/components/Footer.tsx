interface FooterProps {
  textLeft: string;
  textRight: string;
}
export default function Footer(props: FooterProps) {
  //desafio rodapé
  return (
    <div
      className="bg-zinc-900 flex justify-between items-center px-5 py-4  border-t border-zinc-800 
      text-base text-zinc-500"
    >
      <p>{props.textLeft}</p>
      <p>{props.textRight}</p>
    </div>
  );
}
