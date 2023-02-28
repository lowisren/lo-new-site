import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        src="https://img.logoipsum.com/276.svg"
                        height={50}
                        width={50}
                        alt="Lo Blog logo"        
                    />
                </Link>
            </div>
            <div>
                <Link 
                href="https://www.heavybit.com/library/podcasts/human-readable"
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-white underline flex items-center text-center">
                Checkout Human Readable Podcast
                </Link> 
            </div>
        </header>
    )
}

export default Header