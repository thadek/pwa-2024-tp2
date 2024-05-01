

export const Loading = ({ text }: { text?: string }) => {
    return (
        <div className="h-screen w-screen text-white">
            {text? <h1>{text}</h1>:
             <h1>Cargando...</h1>}
           
        </div>
    )
}