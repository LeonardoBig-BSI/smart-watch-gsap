
const Header = () => {
    return (
        <div 
            className="flex items-center justify-center h-[500px] w-screen mb-4 bg-cover bg-center bg-no-repeat shadow-[inset_0_-30px_30px_-10px_black]"
            style={{ backgroundImage: "url('/header-watch.webp')" }}
        >
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mt-16 px-4">
                    O melhor Smartwatch do mercado
                </h1>
            </header>
        </div>
    )
}

export default Header