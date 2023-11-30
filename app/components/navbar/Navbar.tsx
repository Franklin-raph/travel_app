import { NAV_LINKS } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "../button/Button"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed w-full z-[99]' style={{ boxShadow:"0 2px 10px #ddd" }}>
        <Link href='/'>
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="flex items-center gap-10">
            {NAV_LINKS.map(link => (
                <Link href={link.href}>{link.label}</Link>
            ))}
        </ul>
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            design="flex items-center gap-3 cursor-pointer bg-[#292C27] text-white py-3 px-5 rounded-full"
        />
    </nav>
  )
}

export default Navbar