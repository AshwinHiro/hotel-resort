import React from "react";

const Service = () => {
  const DateInput = () => {
    return (
      <div className="DateInputContainer">
        <input className="DateInput py-4 ps-4" type="date" />
        <span className="CalendarButton">
          <button type="button">
            <img width={20} src="images/Calendar.png" alt="Calendar" />
          </button>
        </span>
      </div>
    );
  };

  return (
    <div className="ServicePage">
      <div className="Banner d-flex flex-column justify-content-center">
        <div className="container">
          <div className="d-flex">
            <span className="VerticalLine White"></span>
          </div>

          <div className="my-4">
            <p>Our Services</p>
          </div>

          <div className="my-4">
            <h1>Introducing Our Best Services</h1>
          </div>
        </div>
      </div>

      <div className="container Services my-5">
        <div className="d-flex">
          <span className="VerticalLine"></span>
        </div>

        <div className="ServiceTextContainer d-flex justify-content-between align-items-end">
          <div>
            <div className="ServiceTitle mt-5">
              <p>introducing our services</p>
            </div>

            <div className="ServiceHeading">
              <h1>Amenities That You Can Enjoy</h1>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <p className="w-75 text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* <div className="mt-5">
          {ServicesData.map((Services) => (
            <div className="row">
              {Services.map((Service, ServiceIndex) => (
                <ServiceCard key={ServiceIndex} {...Service} />
              ))}
            </div>
          ))}
        </div> */}
      </div>

      <br />
      <br />

      <div className="container Experience my-5">
        <div className="h-100 Box d-flex flex-column justify-content-center">
          <div className="Background d-flex align-items-center">
            <div className="BackgroundHeading mx-5">
              <h1>Get Your Luxury Experience Now</h1>
            </div>
          </div>

          <div className="Availability">
            <div className="d-flex flex-column p-5">
              <div className="mb-4">
                <h5 className="mb-2">Check In</h5>

                <DateInput />
              </div>

              <div className="mb-4">
                <h5 className="mb-2">Check Out</h5>

                <DateInput />
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-3">Room</h5>

                  <div className="d-flex">
                    <select className="px-3">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>

                    <div className="d-flex">
                      <span className="SpanBox"></span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="mb-3">Guest</h5>

                  <div className="d-flex">
                    <select className="px-3">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>

                    <div className="d-flex">
                      <span className="SpanBox"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center mt-4 pt-3">
                <p>
                  Check Availability{" "}
                  <img
                    className="mx-2"
                    width={7}
                    src="images/Right_Arrow_White.png"
                    alt="Right Arrow"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      
      
    </div>
  );
};

export default Service;
