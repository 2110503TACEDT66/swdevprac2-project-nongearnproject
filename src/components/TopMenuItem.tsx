import Link from "next/link";

export default function TopMenuItem({title, pageRef} : 
{title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className='w-auto mx-6 text-center mt-auto mb-auto text-lg'>
            {title}
        </Link>
    );
}