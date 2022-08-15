import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo/primary-logo.png'
import Link from "next/link";

export default function Home() {
    const linkItems = [
        {"title": "Brosur Umroh Terbaru", "link": "https://www.whatsapp.com"},
        {"title": "Brosur Umroh Terbaru", "link": "https://www.whatsapp.com"},
        {"title": "Brosur Umroh Terbaru", "link": "https://www.whatsapp.com"},
        {"title": "Brosur Umroh Terbaru", "link": "https://www.whatsapp.com"},
    ]

    const listButton = linkItems.map((item, index) => {
        return (
            <Link key={index} href={item.link}>
                <button className="w-full mx-auto p-2 flex flex-col items-center bg-cyan-300 text-white rounded-lg my-2">
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
                <p className="text-2xl">@k2tourntravel.id</p>
            </div>
            {listButton}
        </div>

    </>
  )
}
