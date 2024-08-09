import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center">
          React,Next.jp,Typescript,Tailwind CSS
        </h2>
        <div className="mt-12 flex gap-y-7 gap-x-5">
          <Link
            className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block bg-red-300"
            href="/countUp"
          >
            1.CountUp
          </Link>
          <Link
            className="py-3 px-4 text-2xl rounded-lg border-4 border-gray-500 inline-block bg-yellow-300"
            href="/textChange"
          >
           2.Text On & Off
          </Link>
        </div>
      </div>
    </div>
  );
}
