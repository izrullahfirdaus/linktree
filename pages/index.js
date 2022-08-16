import Image from 'next/image'
import logo from '../public/logo/primary-logo.png'
import Link from "next/link";

export default function Home() {
    const linkItems = [
        {"title": "Brosur Umroh Terbaru", "link": "https://www.whatsapp.com"},
        {"title": "Program Umroh Reguler", "link": "https://api.whatsapp.com/send?phone=6281931031806&text=Assalamualaikum%20wr%20wb,%20saya%20ingin%20menanyakan%20program%20umroh%20reguler?"},
        {"title": "Program Umroh Jejak Para Nabi", "link": "https://api.whatsapp.com/send?phone=6281931031806&text=Assalamualaikum%20wr%20wb,%20saya%20ingin%20menanyakan%20program%20umroh%20jejak%20para%20nabi%20?"},
        {"title": "Persyaratan Umroh", "link": "/persyaratan"},
        {"title": "Webiste K2 Tour n Travel", "link": "https://www.k2tourntravel.com"},

    ]

    const hoverStyle = "hover:bg-violet-600 hover:text-violet-50 hover:border-violet-50 hover:-translate-y-1"

    const listButton = linkItems.map((item, index) => {
        return (
            <Link key={index} href={item.link}>
                <button className={` transition ease-in-out delay-150 w-full mx-auto p-2 flex flex-col items-center bg-violet-50 text-violet-600 border-0 border-violet-600 rounded-lg my-2 drop-shadow-md ${hoverStyle}`}>
                    <p className="mb-2 mt-2">{item.title}</p>
                </button>
            </Link>

        )
    })
  return (
    <>
        <div className="flex flex-col m-5">
            <div className="flex flex-items justify-center my-2">
                <Image src={logo} width={250} height={100} />
            </div>
            <div className="flex flex-items justify-center my-2">
                <p className="text-lg">@k2tourntravel.id</p>
            </div>
            {listButton}
            <div className="flex flex-items justify-center my-2">
                <p className="text-md">Copyright © PT Adita Al Tahir - All Rights Reserved</p>
            </div>
        </div>

    </>
  )
}
