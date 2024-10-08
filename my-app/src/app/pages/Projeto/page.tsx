'use client'
import "./Projeto.css"
import Link from "next/link";

export default function Projeto() {
    return (
    <>
        <div className="flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center m-28">
            <h1 className="text-9xl font-bold text-center text-foreground">Lecom</h1>
            <h1 className="text-7xl font-bold text-center mt-7">planilhas base da automação</h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <Link className="link-projeto" href={""}>Configuração</Link>
            <Link className="link-projeto" href={""}>Interfaces</Link>
            <Link className="link-projeto" href={""}>Suítes</Link>
            <Link className="link-projeto" href={""}>Cenários <br/> (CN)</Link>
            <Link className="link-projeto" href={""}>Casos de Testes (CT) </Link>
            <Link className="link-projeto" href={""}>Scripts <br/> (ST)</Link>
            <Link className="link-projeto" href={""}>Elementos <br/> (GUI)</Link>
        </section>
        </div>
    </>
    );
  }