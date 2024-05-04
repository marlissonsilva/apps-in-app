interface CardProps {
    children: any
    className?: string
}

export default function Card(props: CardProps) {
    return (
        <div className={`
        flex flex-col
        h-64 w-[500px] bg-slate-700 rounded-lg
        ${props.className}`}>
            {props.children}
        </div>
    )
}