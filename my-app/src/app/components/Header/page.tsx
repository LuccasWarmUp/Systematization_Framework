'use client'
import Link from "next/link";
import "./Header.css"

export default function Header() {
  return (
    <>
        <header>
            <h1 className="text-4xl">WarmUP</h1>
            <div>
                <Link className="link" href={""}>Link</Link>
                <Link className="link" href={""}>Link</Link>
                <Link className="link" href={""}>Link</Link>
            </div>
        </header> 
    </>
  );
}