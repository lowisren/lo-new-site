function Banner() {
    return (
    <div className=" flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">The Lo down</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#36454F]">
                    Lo's
                </span>{" "}
                World
            </h2>
        </div>
            <p className="mt-5 md:mt-2 text-gray-700 max-w-sm">
                Virtual community building | Musings on technical empathy & ethical web development | Weekly DEIB Efforts in tech & more!            
            </p> 
    </div>
    );
}

export default Banner;