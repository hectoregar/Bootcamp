import Link from "next/link";
import Navbar from "lab1/components/shared/navbar/page";
export default function BlogPage(props) {
    const title = <h2>Blog</h2>;
    const list = [ 
      "item1", "item2", "item3", "item4", "item5"
    ];

    return (
        <section>
           
            {title}
            <ul> 
                {list.map((item, index) => (<li><Link href={`/blog/${index}`}>{item}</Link></li>))}
            </ul>
        </section>
    )
}