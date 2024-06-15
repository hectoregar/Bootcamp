import Link from "next/link";

export default function Navbar() {
    const title = <h3> Menu</h3>;
    return (
        <nav>
            {title}
            <ul>
                <li> <Link href="/">Home </Link></li>
                <li> <Link href="/about">Acerca de nostros </Link></li>
                <li> <Link href="/contact">Contáctenos</Link></li>
                <li> <Link href="/blog">Blog</Link></li>
            </ul>
        </nav>


    )
}