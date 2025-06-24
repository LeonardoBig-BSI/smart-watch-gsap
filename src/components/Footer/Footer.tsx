import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="mt-80 md:mt-40 p-5 bg-black">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <p className="text-sm sm:text-base text-left text-zinc-50">
                    Copyright 2025 - Todos os direitos reservados.
                </p>

                <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
                    <FontAwesomeIcon icon={faTiktok} className="cursor-pointer text-sm sm:text-2xl mt-2 md:mt-0 text-white hover:text-red-500 duration-300" />
                    <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-sm sm:text-2xl mt-2 md:mt-0 text-white hover:text-pink-600 duration-300" />
                    <FontAwesomeIcon icon={faFacebook} className="cursor-pointer text-sm sm:text-2xl mt-2 md:mt-0 text-white hover:text-blue-600 duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Footer