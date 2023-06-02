
const Mobile = ({ open, setOpen }) => {

    const close = () => setOpen( () => false );

    return (
        <div className={`fixed w-full transition-all duration-300 overflow-hidden  ${ open ? "h-[100vh] mt-3 p-5  " : "h-0" } overflow-clip z-50 bg-black sm:invisible `}>
            <div className="flex flex-col justify-between h-1/2 text-center mt-10" > 
                <a href="#project" onClick={close} className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-3xl font-medium transition duration-300 ease-out">Projects</a>
                <a href="#technologies" onClick={close} className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-3xl font-medium transition duration-300 ease-out">Technologies</a>
                <a href="#contact" onClick={close} className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-3xl font-medium transition duration-300 ease-out">Contact me</a>
            </div>
        </div>
    )
}

export default Mobile;