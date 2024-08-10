import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-bold text-center break-words">
          React,Next.jp,Typescript,Tailwind CSS
        </h2>
        <div className="mt-12 grid justify-center gap-y-7 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link
            className="py-3 px-2 text-center rounded-lg border-4 border-gray-500 inline-block bg-red-200"
            href="/countUp"
          >
            1.CountUp
          </Link>
          <Link
            className="py-3 px-2 text-center rounded-lg border-4 border-gray-500 inline-block bg-yellow-200"
            href="/textChange"
          >
            2.Text On & Off
          </Link>
          <Link
            className="py-3 px-2  text-center rounded-lg border-4 border-gray-500 inline-block bg-blue-200"
            href="/realTimeText"
          >
            3.Realtime Text
          </Link>
          <Link
            className="py-3 px-2 text-center rounded-lg border-4 border-gray-500 inline-block bg-green-200"
            href="/colorChange"
          >
            4.Color Change
          </Link>
        </div>
      </div>
    </div>
  );
}
