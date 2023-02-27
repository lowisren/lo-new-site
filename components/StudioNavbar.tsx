import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#F7AB0A] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
                    Go to Website
                </Link>
                <div className="hidden md:flex p-5 rounded-lg justify center border-2 border-">
                    <h1 className="font-bold text-white">
                        Want to learn about DEI in Tech? Checkout Human Readable 👉
                    </h1>
                    <Link href="https://www.heavybit.com/library/podcasts/human-readable" className="text-[#F7AB0A] font-bold ml-2">
                        Human Readable Podcast
                    </Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;