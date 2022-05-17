import React from "react";
import Slider from "../../components/Slider";

const blogs = [
  {
    id: 1,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img1.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 2,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img2.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 3,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img3.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 4,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img4.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 5,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img5.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 6,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img6.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 7,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img7.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  }, {
    id: 8,
    name: 'Adventure',
    href: '#',
    imageSrc: './img/blog/img8.png',
    header: 'Dream destinations to visit this year in Paris',
    title: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
  },
]

function Home() {
  return (
    <div>
      <div className="h-full max-h-screen w-full">
        <Slider />
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Popular topics
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={blog.imageSrc}
                    alt={blog.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">
                      <a href={blog.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {blog.header}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {blog.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-96'>
        home
      </div>
    </div>
  );
}

export default Home;
