import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;
    return ( 
    <div className="flex items-center space-x-2">
        <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="https://logoipsum.com/artwork/271"
            alt="tiger fox logo"        
        />
        <>{renderDefault(props)}</>
    </div>
    );
}

export default Logo