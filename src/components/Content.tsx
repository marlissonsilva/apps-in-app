interface ContentProps {
  children: any;
}
export default function Content(props: ContentProps) {
  // console.log(props);
  return (
    <div
      className={`
      flex items-start flex-1 
      bg-zinc-900 text-3xl overflow-auto h-screen 
      `}
    >
      {props.children}
    </div>
  );
}
