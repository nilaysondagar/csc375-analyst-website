import React from 'react';

function MeetingNotes() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-b">
                    <stop stopColor="#99C5FA" offset="0%" />
                    <stop stopColor="#3ABAB4" offset="64.317%" />
                    <stop stopColor="#3ABAB4" offset="100%" />
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
                  <circle fill="url(#ni-b)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Meeting Notes</h3>
                <p className="text-gray-200 text-lg mb-6">
                  Can't remember what we said? Can't remember what YOU said? No problem! All meeting notes are available below.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      href="https://docs.google.com/document/d/1Q0YOw0P5WGmx_v3ycTaea8bKbHFkS_-Kg9nPZ8IhO1A/edit?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Client Meeting 1 Notes
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mb-4">
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      href="https://drive.google.com/file/d/1G91rtsCfjBP7RDOgU01bw4dJnsuINUXI/view?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Client Meeting 1 Recording
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

export default MeetingNotes;
