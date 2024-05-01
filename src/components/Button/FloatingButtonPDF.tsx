
export const FloatingButtonPDF = ({ setPDF }:{setPDF:any}) => {


    const onClickHandler = () => {
        setPDF(true);
    }

    return (
        <div className="fixed bottom-4 right-4 p-3 z-[1]">
            <button onClick={onClickHandler} className="flex flex-col justify-center items-center bg-red-700 hover:bg-red-800 transition duration-300 text-white font-bold py-4 px-4 rounded-full shadow-lg">
                {/**pdf icon download */}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

                <p className="text-xs lolfont uppercase">Descargar <br />PDF</p>


            </button>
        </div>
    )
}