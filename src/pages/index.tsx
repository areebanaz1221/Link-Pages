import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1>
      Home Page 
    </h1>
    <Link className="mr-5 hover:text-red-500" href="/"> Home </Link>
    <Link className="mr-5 hover:text-blue-500" href="/about"> About Us</Link>
    <Link className="mr-5 hover:text-green-500" href="/contactus"> Contact Us</Link>
    <Link className="mr-5 hover:text-orange-500" href="/privacy-policy"> Privacy-Policy </Link>
  </div>
  )
}