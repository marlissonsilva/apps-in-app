interface CardProps {
    children: any
    className?: string
}

export default function Card(props: CardProps) {
    return (
        <div className={`
        flex flex-col
        h-48 w-[100vw] sm:h-52 sm:w-[80vw]
        lg:h-64 max-w-[450px] bg-slate-700 rounded-lg
        ${props.className}`}>
            {props.children}
        </div>
    )
}