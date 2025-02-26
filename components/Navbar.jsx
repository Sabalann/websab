import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
        <nav className="bg-white py-4 px-6 fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
                <Image src="/logo-transparent.png" width={64} height={64} alt="Logo" />
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
                <Link href="/portfolio" className="hover:text-green-600 h-min">Portfolio</Link>
                <Link href="/overmij" className="hover:text-green-600 h-min">Over Mij</Link>
                <Link href="/build" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Start jouw project
                </Link>
            </div>
            </div>
        </nav>
        </>
    );
}