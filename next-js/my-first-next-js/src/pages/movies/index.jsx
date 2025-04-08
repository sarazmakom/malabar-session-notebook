import Image from "next/image";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>My favourite movies</h1>
      {/* <a href="/movies/parasite">Parasite</a> */}
      <ul>
        <li>
          <Link href="/movies/parasite">Parasite</Link>
        </li>
        <li>
          <Link href="/movies/barbie">Barbie</Link>
        </li>
        {/* <img src="" alt="koala" width={850} height={450}></img> */}
        {/* <Image src="" alt="koala" width={850} height={450}></Image> */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1664302956815-2a270ad7a9b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="koala"
          width={500}
          height={500}
        ></Image>
      </ul>
    </>
  );
}
