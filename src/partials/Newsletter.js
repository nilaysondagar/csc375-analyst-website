import React from 'react';

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-6 md:pb-10">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#99C5FA" offset="44.317%" />
                    <stop stopColor="#004391" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#CCE2FC">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Documents & Files</h3>
                <p className="text-gray-200 text-lg mb-6">Looking for more info? You can find everything you're looking for in the documents below.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    {/* <h4 className="text-l text-white font-bold leading-snug tracking-tight mr-4">Looks like we're still working on this! Check back later.</h4> */}
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      download="CSC375_Project_RFP_Group_4.pdf"
                      href={require("../files/rfp.pdf").default}
                    >
                      Request For Proposal (RFP)
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      download="CSC375_Project_Charter_Group_15.pdf"
                      href={require("../files/projectCharter.pdf").default}
                    >
                      Project Charter
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      download="CSC375_Requirements_Document_Group_15.pdf"
                      href={require("../files/requirementsDocument.pdf").default}
                    >
                      Requirements Document
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      download="CSC375_Requirements_With_Use_Cases_Document_Group_15.pdf"
                      href={require("../files/useCasesDocument.pdf").default}
                    >
                      Requirements With Use Cases Document
                    </a>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
