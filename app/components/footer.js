import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../../public/images/github.svg" alt="github" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../../public/images/linkedin.svg" alt="github" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../../public/images/twitter.svg" alt="github" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../../public/images/facebook.svg" alt="github" />
                </a>
                <hr />
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <p>&copy; {new Date().getFullYear()} JunkBranding</p>
            </div>
        </footer>
    )
}

export default Footer;