import React from 'react';

function Schedule() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-6 md:pb-10">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left w-full">
                <h3 className="h3 text-white mb-2">Project Schedule</h3>
                <p className="text-gray-200 text-lg mb-6">
                  Below you can find the expected delivery dates for the project deliverables outlined in the RFP.
                  Please note that dates are subject to change.
                </p>

                {/* CTA form */}
                <div className="w-full">
                  <a
                    href="https://drive.google.com/file/d/1-YJlj8G8mWvDOqt-woRrfsf9CRhr_iaI/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                  <img
                    alt="Project Schedule"
                    className="w-full"
                    src={require('../images/projectSchedule.png').default}
                  />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Schedule;
