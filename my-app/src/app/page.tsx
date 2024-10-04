import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center m-28">
        <h1 className="text-9xl font-bold text-center">WarmUP</h1>
        <h1 className="text-7xl font-bold text-center mt-7">Qualidade em Software</h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Link className="btn-link" href={""}>Projetos</Link>
        <Link className="btn-link" href={""}>Projetos</Link>
        <Link className="btn-link" href={""}>Projetos</Link>
        <Link className="btn-link" href={""}>Projetos</Link>
        <Link className="btn-link" href={""}>Projetos</Link>
        <Link className="btn-link" href={""}>Projetos</Link>
      </section>
    </div>
  );
}
