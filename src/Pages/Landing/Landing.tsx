import { useTitle } from '../../Hooks/useTitle';
import { Show } from '../../components/Animations/Show';
import { Reveal } from '../../components/Animations/Reveal';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    useTitle('Lolchamp - PWA 2024');
    return (
        <Show>

            <div className="flex absolute flex-col items-center justify-center w-screen h-screen ">
                <div className="z-10 h-full w-full bg-black  bg-opacity-15 2xl:p-[10em] md:p-[3em]  flex  ">

                    <div className='bg-[url(./img/1.jpg)] hidden lg:block lg:w-3/6 2xl:w-4/6 md:w-1/2 md:rounded-s-2xl bg-cover bg-top md:bg-[size:200%]   lg:bg-[size:160%]  xl:bg-[center_20%] xl:bg-[size:150%]  2xl:bg-[center_20%] 2xl:bg-[size:150%]  h-full  '>
                    </div>

                    <div className="lg:w-3/6 md:w-full md:rounded-e-2xl bg-purple-950 bg-opacity-80 flex flex-col justify-center gap-3 items-left p-20">
                        <Reveal>
                            <h1 className="text-5xl text-white lolfont uppercase">
                                lolchamp
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="text-white text-md lolfont">Te damos la bienvenida al proyecto N°2 de React de PWA 2024</p>
                        </Reveal>
                        <Reveal>
                            <p className="text-white text-md  uppercase lolfont">Grupo 12</p>
                        </Reveal>

                        
                            <button className="bg-white text-black p-2 rounded-lg mt-5 lolfont hover:bg-purple-950 uppercase hover:text-white transition duration-150 shadow-xl " onClick={handleClick} >Iniciar</button>
                        


                    </div>







                </div>
            </div>

            <div className="flex relative flex-col items-center justify-center h-screen ">
                <video autoPlay loop muted id="lolVideo" className="z-0 w-full h-full object-cover">
                    <source src="https://www.leagueoflegends.com/static/hero-c35bd03ceaa5f919e98b20c905044a3d.webm" type="video/mp4" />
                </video>
            </div>
        </Show>
    )
}