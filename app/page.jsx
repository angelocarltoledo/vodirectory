import Link from "next/link";
import resources from "@data/resources";

const Home = () => {
  return (
    <>
      <h1 className="font-bold text-center text-[2rem]">
        Welcome to VODirectory
      </h1>
      <p className="text-xl text-center pt-3">
        This simple website aims to serve voice actors in the way that most, if
        not all, the resources they need will be here in this one place. I hope
        this accomplishes that for you today and improvements are sure to come
        little by little. :)
      </p>

      <p className="text-[1.3rem]">
        <u>Acknowledgements and Resources</u>
      </p>

      <div className="flex flex-wrap gap-5 justify-center">
        {resources.map((entry) => (
          <div
            key={entry.title}
            className="flex-grow p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {entry.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {entry.author}
            </p>
            <Link
              href={entry.link}
              target="_blank"
              className="inline-flex entrys-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go to Resource!
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
