import React from "react";
import "./style.css";

const blogheader = "./img/blogheader.png";
const avatar = "./img/author/avatar1.png";
const tw = "./img/social/Tw.png";
const fb = "./img/social/Fb.png";
const Pn = "./img/social/Pn.png";
const Be = "./img/social/Be.png";

const blogmetro = [
  {
    id: 1,
    name: "Adventure",
    href: "#",
    time: "08.08.2021",
    imageSrc: "./img/metro/img.png",
    header: "Richird Norton photorealistic rendering as real photos",
    title:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    id: 2,
    name: "Adventure",
    href: "#",
    time: "08.08.2021",
    imageSrc: "./img/metro/img2.png",
    header: "Richird Norton photorealistic rendering as real photos",
    title:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    id: 3,
    name: "Adventure",
    href: "#",
    time: "08.08.2021",
    imageSrc: "./img/metro/img3.png",
    header: "Richird Norton photorealistic rendering as real photos",
    title:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
];

function SinglePage() {
  return (
    <div>
      <div id="blogcontainer">
        <img
          src={blogheader}
          alt="blogpost"
          className="bg-center"
          id="blogpostimg"
        />
        <div className="blogposttext">
          <div>
            <span>tag</span>
          </div>
          <h2>
            Richird Norton photorealistic <br />
            rendering as real photos
          </h2>
          <div className="blogposttext2">
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
            <span>By Jennifer Lawrence</span>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl ">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-1 flex text-gray-500">
            <span>08.08.2022</span>
            <span className=" px-2">
              <svg
                width="35"
                height="1"
                viewBox="0 0 35 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="35" y2="0.5" stroke="#C4C4C4" />
              </svg>
            </span>
            <span>4 minutes</span>
          </div>
          <div className="col-start-2 col-end-7">
            <p className="text-base font-normal leading-6 text-justify text-gray-500">
              Seamlessly syndicate cutting-edge architectures rather than
              collaborative collaboration and idea-sharing. Proactively incubate
              visionary interfaces whereas premium benefits. Seamlessly
              negotiate ubiquitous leadership skills rather than parallel ideas.
              Dramatically visualize superior interfaces for best-of-breed
              alignments. Synergistically formulate performance based users
              through customized relationships. Interactively deliver
              cross-platform ROI via granular systems. Intrinsicly enhance
              effective initiatives vis-a-vis orthogonal outsourcing.
              Rapidiously monetize market-driven opportunities with
              multifunctional users. Collaboratively enhance visionary
              opportunities through revolutionary schemas. Progressively network
              just in time customer service without real-time scenarios.
              <br />
              Synergistically drive e-business leadership with unique synergy.
              Compellingly seize market positioning ROI and bricks-and-clicks
              e-markets. Proactively myocardinate timely platforms through
              distributed ideas. Professionally optimize enabled core
              competencies for leading-edge sources. Professionally enhance
              stand-alone leadership with innovative synergy. Rapidiously
              generate backend experiences vis-a-vis long-term high-impact
              relationships. Authoritatively supply market-driven mindshare and
              bricks-and-clicks opportunities. Holisticly create diverse
              innovation through adaptive communities. Efficiently empower
              seamless meta-services with impactful opportunities. Distinctively
              transition virtual outsourcing with focused e-tailers.
              <br />
              <a href="/" class="leading-relaxed text-orange-300 text-5xl">
                “ Monotonectally seize superior mindshare rather than efficient
                technology. ”{" "}
              </a>
              <br /> Compellingly enhance seamless resources through competitive
              content. Continually actualize 24/365 alignments for
              resource-leveling platforms. Energistically enhance high standards
              in models and professional expertise. Intrinsicly iterate
              extensible metrics for prospective opportunities. Continually
              develop leading-edge experiences through quality e-services.
            </p>
            <div className="py-8 text-xs">
              <span className="px-5 rounded border text-gray-500 uppercase">
                adventure
              </span>
              <span className="px-5 mx-2 rounded border text-gray-500 uppercase">
                photo
              </span>
              <span className="px-5 rounded border text-gray-500 uppercase">
                design
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 py-10">
              <div className="flex justify-start ">
                <img src={avatar} alt="avatar" className="w-12 h-12" />
                <div className="px-4">
                  <p className="text-sm font-semibold text-gray-700">
                    By Jennifer Lawrence
                  </p>
                  <span className="text-xs text-gray-500">
                    Thinker and Designer
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="mr-2">
                  {" "}
                  <img src={fb} alt="avatar" className="w-5 h-5" />
                </span>
                <span className="mr-2">
                  {" "}
                  <img src={tw} alt="avatar" className="w-5 h-5" />
                </span>
                <span className="mr-2">
                  {" "}
                  <img src={Pn} alt="avatar" className="w-5 h-5" />
                </span>
                <span>
                  {" "}
                  <img src={Be} alt="avatar" className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-500">
            Editor’s Pick
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
            {blogmetro.map((blog) => (
              <div key={blog.id} className="group relative " id="blogmetro">
                <div className="w-full min-h-8 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={blog.imageSrc}
                    alt={blog.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="blogmetrotext">
                    <span>{blog.time}</span>
                    <h2 className="text-lg font-semibold ">
                      <a href={blog.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {blog.header}
                      </a>
                    </h2>
                    <p className="mt-1 text-sm">{blog.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
