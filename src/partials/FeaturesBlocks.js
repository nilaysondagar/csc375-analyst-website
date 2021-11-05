import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative" id="our-team">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-800 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Who we are</h2>
            <p className="text-xl text-gray-200">
              Each member of our team specializes in a specific task that helps us design any product you require, while still being a jack of all trades.
              You can reach our team at <span className="text-blue-300">info@softwareplusplus.com</span>.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Nilay Sondagar" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/NilaySondagar.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight mb-1">Nilay Sondagar</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Director++ of Technical Compliance</h6>
              <p className="text-gray-600 text-center">
                I oversee the technical infrastructure that Software++ manages for client organizations, as well as manage our projects from a high-level perspective.
                I also name all of our solutions with creative and innovative names.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Dan Melamed" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/DanMelamed.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight">Dan Melamed</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Technical Assistant & Systems Analyst</h6>
              <p className="text-gray-600 text-center mt-2">
                As technical assistant, I assist the company with planning, organizing, resolving disputes, requirements gathering, and other administrative or technical support needs.
                As systems analyst, I determine the needs of clients for system development.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Vyom Shah" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/VyomShah.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight mb-1">Vyom Shah</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Analyst</h6>
              <p className="text-gray-600 text-center">
                As an analyst, I will gather information to develop the website that the client requested, and will also customize, improve, optimize and analyze the project requirements.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Abdullahi Bashir" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/AbdullahiBashir.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight mb-1">Abdullahi Bashir</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Systems Analyst</h6>
              <p className="text-gray-600 text-center">
                As a systems analyst, I work with clients to provide feedback on their project and analytical deliverables. In addition, through an iterative process of prototype design
                and assessment in conjunction with the client, I evaluate and describe requirements for proposed systems.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Franklin Yang" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/FranklinYang.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight mb-1">Franklin Yang</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Analyst & Communications Manager</h6>
              <p className="text-gray-600 text-center">
                As an analyst, I work together with my team to help solve our client’s problem. I give professional feedback on the proposed product, as well as organize the project's
                processes. I also manage communications between the client and Software++.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex min-h-full flex-col items-center p-8 bg-white rounded shadow-xl">
              <img alt="Logan Raffkind" className="w-32 h-32 p-1 -mt-1 mb-2 rounded-full border-solid border-4 border-blue-500" src={require('../images/teamPhotos/LoganRaffkind.jpeg').default} />
              <h4 className="text-xl text-black font-bold leading-snug tracking-tight mb-1">Logan Raffkind</h4>
              <h6 className="text-l text-blue-400 italic leading-snug tracking-tight mb-1">Unpaid Intern</h6>
              <p className="text-gray-600 text-center">
                As an unpaid intern, I jump around helping different team members so I can get paid in “experience”.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
