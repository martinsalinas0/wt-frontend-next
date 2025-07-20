import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center font-bold text-6xl mt-5">
        HOME PAGE
      </div>
      <span>
        Welcome to &apos;Work Together&apos;
        <p>
          Connect with contractors and sub-contractors to easily bid for jobs,
          quote to customers, complete them, and invoice with ease, all in one
          spot
        </p>
      </span>
      <div className="flex m-3 p-2 justify-center gap-4">
        <button
          type="button"
          className="bg-green-600 text-white px-6 py-3 rounded-3xl hover:cursor-pointer transition hover:bg-green-400"
        >
          <Link href="/auth/login">Login</Link>
        </button>

        <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl hover:bg-blue-600 hover:cursor-pointer transition">
          <Link href="/auth/sign-up">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
