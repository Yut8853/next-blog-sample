import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/images/logo.png';

const Header = () => {
    return (
        <header>
            <div>
                <Link href="/">
                    <Image src={logoImage} alt="logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;