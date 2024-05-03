import { useTitle } from "../../Hooks/useTitle";

export const NotFoundPage = () => {

    useTitle('404 - Not Found');
    return (
        <div className="w-screen h-screen flex   items-center justify-center text-center flex-col ">

            <div className="h-50 items-center flex ">
                <h1 className="text-5xl text-red-500 uppercase  lolfont ">404 </h1>
                <img src="/img/HeH_Emote.webp" alt="404" className="w-40 h-40" />

            </div>


            
               
               
         




            <h1 className="text-white ">El recurso solicitado no existe. </h1>

            
        </div>

    )
}