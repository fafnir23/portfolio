
export const Button = ({ name, link, self, onClick, type }) => {
    return (
        <a target={ self ? "_self" : "_blank" } href={link} onClick={onClick} type={type} className="relative cursor-pointer inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group ">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500 via-sky-600 to-indigo-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-emerald-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">{name}</span>
        </a>
    )
}

export const OutlineButton = ({ name, link}) => {
    return (
        <a target="_blank" href={link} className="relative cursor-pointer inline-flex items-center justify-center inline-block px-12 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all rounded-full duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                {name}
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
    )
}
