import Link from "next/link";

export function NavBar() {
    return(
        <div className="nav-bar row">
            <Link href={'/'} className='btn col-sm navlink'>Home</Link>
            <Link href={'/pages/about'} className='btn col-sm navlink'>About Me</Link>
            <Link href={'/pages/blog'} className="btn col-sm navlink">Blog</Link>
            <Link href={'/pages/wordle'} className="btn col-sm navlink">Wordle Clone</Link>
            <Link href={'/pages/writing'} className="btn col-sm navlink">Writing Samples</Link>
            <Link href={'/music'} className="btn col-sm navlink">Music (under construction)</Link>
        </div>
    )
}