import React, { useState } from "react";
import Popup from "../Components/Popup/Popup";

const Service = () => {
  const InitialServiceConfig = {
    ServiceName: "",
    ServiceDesc: "",
    ImageSrc: "",
  };

  const [_hoverServiceCard, setHoverServiceCard] = useState("");

  const ServicesData = [
    [
      {
        ServiceName: "",
        ServiceDesc: "",
        ImageSrc: "",
      },
      {
        ServiceName: "Workout & Yoga Rooms",
        ServiceDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ImageSrc: "images/Gym.png",
      },
    ],
    [
      {
        ServiceName: "Spa, Massage & Sauna",
        ServiceDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ImageSrc: "images/Spa.png",
      },
      {
        ServiceName: "",
        ServiceDesc: "",
        ImageSrc: "",
      },
    ],
    [
      {
        ServiceName: "",
        ServiceDesc: "",
        ImageSrc: "",
      },
      {
        ServiceName: "Multiple Cuisines & Beverages",
        ServiceDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ImageSrc: "images/Breakfast.png",
      },
    ],
  ];

  const [_openServiceModal, setOpenServiceModal] = useState(false);
  const [_StoreServiceConfig, setStoreServiceConfig] =
    useState(InitialServiceConfig);
  const [_ServiceConfig, setServiceConfig] = useState(ServicesData);
  const [_ServiceIndex, setServiceIndex] = useState([]);

  const handleServiceModal = (toggle, Indexes) => {
    if (toggle === "open") {
      const ServiceData = Object.assign(
        {},
        _ServiceConfig[Indexes[0]][Indexes[1]]
      );
      setServiceIndex(Indexes);
      setStoreServiceConfig(ServiceData);
      setOpenServiceModal(true);
    } else {
      setServiceIndex([]);
      setStoreServiceConfig(InitialServiceConfig);
      setOpenServiceModal(false);
    }
  };

  const handleServiceSave = async () => {
    const UpdateServiceData = Object.assign([], _ServiceConfig);
    UpdateServiceData[_ServiceIndex[0]][_ServiceIndex[1]] = _StoreServiceConfig;
    setServiceConfig(UpdateServiceData);

    await callAPIAfterEdit("Team", _StoreServiceConfig);

    setStoreServiceConfig(InitialServiceConfig);
    setOpenServiceModal(false);
  };

  const callAPIAfterEdit = async (ComponentName, Value) => {
    try {
      const response = await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component: ComponentName,
          field: "All Fields",
          value: JSON.stringify(Value),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
      } else {
        console.error("Server error:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const ServiceCard = ({
    ServiceName,
    ServiceDesc,
    ImageSrc,
    ServicesIndex,
    ServiceIndex,
  }) => {
    return (
      <div
        className={`ServiceCardContainer ${
          ServiceName === "" ? "NoService" : ""
        } col p-3`}
      >
        {ServiceName !== "" ? (
          <>
            <div className="p-4">
              <div className="my-3">
                <img width={40} src={ImageSrc} />
              </div>

              <div className="my-3">
                <h5>{ServiceName}</h5>
              </div>

              <div className="my-3">
                <p>{ServiceDesc}</p>
              </div>

              <div className="my-5 d-flex justify-content-end">
                <button
                  onMouseOver={() => setHoverServiceCard(ServiceName)}
                  onMouseLeave={() => setHoverServiceCard("")}
                  className="DiscoverButton px-4 py-2"
                >
                  Discover Rooms{" "}
                  <img
                    className="mx-2"
                    width={5}
                    src={
                      _hoverServiceCard === ServiceName
                        ? "images/Right_Arrow.png"
                        : "images/Right_Arrow_White.png"
                    }
                    alt="Right Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="EditContainer px-2 py-2">
              <img
                width={25}
                src="images/EditColor.png"
                alt="Edit"
                onClick={() =>
                  handleServiceModal("open", [ServicesIndex, ServiceIndex])
                }
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  };

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

        <div className="mt-5">
          {_ServiceConfig.map((Services, ServicesIndex) => (
            <div key={ServicesIndex} className="row">
              {Services.map((Service, ServiceIndex) => (
                <ServiceCard
                  key={ServiceIndex}
                  ServicesIndex={ServicesIndex}
                  ServiceIndex={ServiceIndex}
                  {...Service}
                />
              ))}
            </div>
          ))}
        </div>
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

      {/* Service Popup */}

      {_openServiceModal && (
        <Popup>
          <div className="AddButton">
            <div className="text-end my-3 Close">
              <img
                width={25}
                src="images/Cross.png"
                alt="Close"
                onClick={() => setOpenServiceModal(false)}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Service Name</h5>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreServiceConfig.ServiceName}
                  onChange={(e) =>
                    setStoreServiceConfig((prevdata) => ({
                      ...prevdata,
                      ServiceName: e.target.value,
                    }))
                  }
                  placeholder="Suite"
                />
              </div>
            </div>

            <div className="my-3">
              <div>
                <div>
                  <h5>Service Description</h5>
                </div>
              </div>

              <div>
                <textarea
                  className="px-3 py-1"
                  cols={5}
                  value={_StoreServiceConfig.ServiceDesc}
                  onChange={(e) =>
                    setStoreServiceConfig((prevdata) => ({
                      ...prevdata,
                      ServiceDesc: e.target.value,
                    }))
                  }
                  placeholder="Suite"
                />
              </div>
            </div>

            <div className="Buttons">
              <div className="Save my-2">
                <button
                  className="w-100 py-2"
                  onClick={() => handleServiceSave()}
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Service;
