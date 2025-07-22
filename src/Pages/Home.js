import React, { useState } from "react";
import Popup from "../Components/Popup/Popup";

const Home = () => {

  const URL = "https://hotel-resort-ash-backend.vercel.app/";

  const InitialAddButtonConfig = {
    ButtonStyle: "Fill",
    ButtonText: "",
    Color: "",
    ButtonSize: "Small",
    Icon: true,
    Delete: true,
  };
  const InitalRoomConfig = {
    SuiteName: "",
    Charges: "",
    DoubleBed: true,
    Bathtub: true,
    AirConditioner: true,
    FreeWifi: true,
  };
  const InitialServiceConfig = {
        ServiceName: "",
        ServiceDesc: "",
        ImageSrc: "",
    };
const InitialTeamConfig = {
      Name: "",
      Profession: "",
    };

  const [_hoverServiceCard, setHoverServiceCard] = useState("");

  const [_openButtonModal, setOpenButtonModal] = useState(false);
  const [_StoreAddButtonConfig, setStoreAddButtonConfig] = useState(
    InitialAddButtonConfig
  );
  const [_AddButtonConfig, setAddButtonConfig] = useState(
    InitialAddButtonConfig
  );

  const RoomCardData = [
    [
      {
        SuiteName: "Superior Suite",
        Charges: "$300/Night",
        DoubleBed: true,
        Bathtub: true,
        AirConditioner: true,
        FreeWifi: true,
      },
      {
        SuiteName: "Junior Suite",
        Charges: "$270/Night",
        DoubleBed: false,
        Bathtub: true,
        AirConditioner: false,
        FreeWifi: true,
      },
    ],
    [
      {
        SuiteName: "Deluxe Room",
        Charges: "$210/Night",
        DoubleBed: true,
        Bathtub: true,
        AirConditioner: true,
        FreeWifi: true,
      },
      {
        SuiteName: "Double Room",
        Charges: "$180/Night",
        DoubleBed: false,
        Bathtub: true,
        AirConditioner: false,
        FreeWifi: true,
      },
      {
        SuiteName: "Family Room",
        Charges: "$150/Night",
        DoubleBed: false,
        Bathtub: true,
        AirConditioner: false,
        FreeWifi: true,
      },
    ],
  ];

  const [_openRoomModal, setOpenRoomModal] = useState(false);
  const [_StoreRoomConfig, setStoreRoomConfig] = useState(InitalRoomConfig);
  const [_RoomConfig, setRoomConfig] = useState(RoomCardData);
  const [_RoomIndex, setRoomIndex] = useState([]);

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
  const [_StoreServiceConfig, setStoreServiceConfig] = useState(InitialServiceConfig);
  const [_ServiceConfig, setServiceConfig] = useState(ServicesData);
  const [_ServiceIndex, setServiceIndex] = useState([]);


  const TeamData = [
    {
      Name: "Laurent Wayne",
      Profession: "Hotel Manager",
    },
    {
      Name: "Josh Mullins",
      Profession: "Kitchen Manager",
    },
    {
      Name: "Andrea Hugh",
      Profession: "Recepcionista",
    },
    {
      Name: "James Norman",
      Profession: "Room Service",
    },
  ];

    const [_openTeamModal, setOpenTeamModal] = useState(false);
  const [_StoreTeamConfig, setStoreTeamConfig] = useState(InitialTeamConfig);
  const [_TeamConfig, setTeamConfig] = useState(TeamData);
  const [_TeamIndex, setTeamIndex] = useState([]);

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

  const handleRoomModal = (toggle, Indexes) => {
    if (toggle === "open") {
      const RoomData = Object.assign({}, _RoomConfig[Indexes[0]][Indexes[1]]);
      setRoomIndex(Indexes);
      setStoreRoomConfig(RoomData);
      setOpenRoomModal(true);
    } else {
      setRoomIndex([]);
      setStoreRoomConfig(InitalRoomConfig);
      setOpenRoomModal(false);
    }
  };

  const handleRoomSave = async () => {
    const UpdateRoomData = Object.assign([], _RoomConfig);
    UpdateRoomData[_RoomIndex[0]][_RoomIndex[1]] = _StoreRoomConfig;
    setRoomConfig(UpdateRoomData);

    await callAPIAfterEdit("Team", _StoreRoomConfig);

    setStoreRoomConfig(InitalRoomConfig);
    setOpenRoomModal(false);
  };

  const RoomCard = ({
    SuiteName,
    Charges,
    DoubleBed,
    Bathtub,
    AirConditioner,
    FreeWifi,
    RoomsIndex,
    RoomIndex,
    key,
  }) => {
    return (
      <div className="RoomCardContainer col mx-4">
        <div className="RoomCard d-flex flex-column justify-content-end p-4">
          <div>
            <h1>{SuiteName}</h1>
          </div>

          <div className="mb-2">
            <p>{Charges}</p>
          </div>

          <div className="d-flex">
            <span className="StraightLine"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <button className="BookNow">
                Book Now{" "}
                <img
                  className="mx-2"
                  width={7}
                  src="images/Right_Arrow.png"
                  alt="Right Arrow"
                />
              </button>
            </div>

            <div className="d-flex">
              {DoubleBed && (
                <div>
                  <img
                    className="ms-3"
                    src="images/Double_Bed.png"
                    alt="Double Bed"
                  />
                </div>
              )}
              {Bathtub && (
                <div>
                  <img
                    className="ms-3"
                    src="images/Bathtub.png"
                    alt="Double Bed"
                  />
                </div>
              )}
              {AirConditioner && (
                <div>
                  <img
                    className="ms-3"
                    src="images/Air_Conditioner.png"
                    alt="Double Bed"
                  />
                </div>
              )}
              {FreeWifi && (
                <div>
                  <img
                    className="ms-3"
                    src="images/Free_Wifi.png"
                    alt="Double Bed"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="EditContainer px-2 py-2">
          <img
            width={25}
            src="images/EditColor.png"
            alt="Edit"
            onClick={() => handleRoomModal("open", [RoomsIndex, RoomIndex])}
          />
        </div>
      </div>
    );
  };

  const handleServiceModal = (toggle, Indexes) => {
    if (toggle === "open") {
      const ServiceData = Object.assign({}, _ServiceConfig[Indexes[0]][Indexes[1]]);
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

  const ServiceCard = ({ ServiceName, ServiceDesc, ImageSrc, ServicesIndex, ServiceIndex}) => {
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
              <img width={25} src="images/EditColor.png" alt="Edit" onClick={() => handleServiceModal("open", [ServicesIndex,ServiceIndex])} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  };

  const handleTeamModal = (toggle, Index) => {
    if (toggle === "open") {
      const TeamData = Object.assign({}, _TeamConfig[Index]);
      setTeamIndex(Index);
      setStoreTeamConfig(TeamData);
      setOpenTeamModal(true);
    } else {
      setTeamIndex([]);
      setStoreTeamConfig(InitialTeamConfig);
      setOpenTeamModal(false);
    }
  };

  const handleTeamSave = async() => {
    const UpdateTeamData = Object.assign([], _TeamConfig);
    UpdateTeamData[_TeamIndex] = _StoreTeamConfig;
    setTeamConfig(UpdateTeamData);

    await callAPIAfterEdit("Team", _StoreTeamConfig);

    setStoreTeamConfig(InitialTeamConfig);
    setOpenTeamModal(false);
  };

  const TeamCard = ({ Name, Profession, Index}) => {
    return (
      <div className="TeamCard col">
        <div className="Cover d-flex align-items-end justify-content-end">
          <div className="mx-3 my-2 SocialMedia">
            <div className="mb-2">
              <img src="images/X.png" alt="X" />
            </div>
            <div className="mb-2">
              <img src="images/Facebook.png" alt="Facebook" />
            </div>
            <div className="mb-2">
              <img src="images/Box.png" alt="Box" />
            </div>
          </div>
        </div>

        <div className="Text px-3 my-4">
          <div className="Name">
            <h4>{Name}</h4>
          </div>

          <div className="Profession">
            <p>{Profession}</p>
          </div>
        </div>

        <div className="EditContainer px-2 py-2">
            <img width={25} src="images/EditColor.png" alt="Edit" onClick={() => handleTeamModal("open", Index)} />
        </div>
      </div>
    );
  };

  const handleSave = async () => {
    setAddButtonConfig({ ..._StoreAddButtonConfig, Delete: false });
    await callAPIAfterEdit("Add Button", { ..._StoreAddButtonConfig, Delete: false });
    setOpenButtonModal(false);
  };

  const handleDelete = () => {
    setAddButtonConfig(InitialAddButtonConfig);
    setStoreAddButtonConfig(InitialAddButtonConfig);
    setOpenButtonModal(false);
  };

  const callAPIAfterEdit = async (ComponentName, Value) => {
    try {
        const response = await fetch(`${URL}update-section`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            component: ComponentName,
            field: 'All Fields',
            value: JSON.stringify(Value),
        }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data.message);
        } else {
            console.error('Server error:', data.error);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
  }

  return (
    <div className="Home">
      {/* Banner */}

      <div className="Banner d-flex flex-column justify-content-center align-items-center">
        <div className="my-4">
          <p>Best place to relax & enjoy</p>
        </div>

        <div className="my-4">
          <h1>A Luxurious Way To Enjoy Your Life</h1>
        </div>

        {!_AddButtonConfig.Delete && (
          <div className="my-4">
            <button
              className={`DiscoverButton px-4 py-2 ${_AddButtonConfig.ButtonStyle} ${_AddButtonConfig.ButtonSize}`}
              style={{ backgroundColor: _AddButtonConfig.Color }}
            >
              {_AddButtonConfig.ButtonText}{" "}
              {_AddButtonConfig.Icon && (
                <img
                  className="mx-2"
                  width={5}
                  src="images/Right_Arrow_White.png"
                  alt="Right Arrow"
                />
              )}
              <img
                className="Edit"
                width={25}
                src="images/Edit.png"
                alt="Edit"
                onClick={() => setOpenButtonModal(true)}
              />
            </button>
          </div>
        )}

        {_AddButtonConfig.Delete && (
          <div>
            <button
              className="AddButton py-2 px-3"
              onClick={() => setOpenButtonModal(true)}
            >
              + Add Button
            </button>
          </div>
        )}
      </div>

      {/* Availability */}

      <div className="container Availability">
        <div className="d-flex justify-content-center">
          <div className="Box px-5 py-4">
            <div className="d-flex justify-content-evenly align-items-center">
              <div>
                <h5 className="mb-3">Check In</h5>

                <DateInput />
              </div>

              <div>
                <h5 className="mb-3">Check Out</h5>

                <DateInput />
              </div>

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
                <p>
                  Check Availability{" "}
                  <img
                    className="mx-2"
                    width={7}
                    src="images/Right_Arrow.png"
                    alt="Right Arrow"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Choices */}

      <div className="container RoomChoices mt-5">
        <div className="d-flex justify-content-center">
          <span className="VerticalLine"></span>
        </div>

        <div className="RoomTitle text-center mt-5">
          <p>our room choices</p>
        </div>

        <div className="RoomHeading text-center">
          <h1>Luxury Rooms & Suites</h1>
        </div>

        <div>
          {_RoomConfig.map((Rooms, RoomsIndex) => (
            <div key={RoomsIndex} className="row my-5">
              {Rooms.map((Room, RoomIndex) => (
                <RoomCard
                  key={RoomIndex}
                  RoomsIndex={RoomsIndex}
                  RoomIndex={RoomIndex}
                  {...Room}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}

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
                <ServiceCard key={ServiceIndex} ServicesIndex={ServicesIndex} ServiceIndex={ServiceIndex} {...Service} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review */}

      <div className="CustomerReview d-flex flex-column justify-content-center mt-5">
        <div className="d-flex justify-content-center">
          <span className="VerticalLine White"></span>
        </div>

        <div className="ReviewTitle text-center mt-5">
          <p>our customer review</p>
        </div>

        <div className="ReviewHeading text-center">
          <h1>What Our Client Says</h1>
        </div>
      </div>

      {/* Reviews */}

      <div className="container Review">
        <div className="d-flex justify-content-center">
          <div className="w-75 row">
            <div className="col-4 NoSection"></div>

            <div className="col-8 Section p-5">
              <div>
                {Array.from({ length: 5 }, () => (
                  <img
                    className="me-2"
                    width={25}
                    src="images/Star.png"
                    alt="Star"
                  />
                ))}
              </div>

              <div className="Text mt-3">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam”
                </p>
              </div>

              <div className="Author text-end mt-3">
                <p>Jackson Dean</p>
              </div>

              <div className="Type text-end mt-3">
                <p>Guest</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Team */}

      <div className="container ExpertTeam">
        <div className="d-flex justify-content-center">
          <span className="VerticalLine"></span>
        </div>

        <div className="TeamTitle text-center mt-5">
          <p>meet our team</p>
        </div>

        <div className="TeamHeading text-center">
          <h1>Expert Team Persons</h1>
        </div>

        <div className="mt-5">
          <div className="row">
            {_TeamConfig.map((Person, Index) => (
              <TeamCard {...Person} Index={Index} />
            ))}
          </div>
        </div>
      </div>

      {/* Popups */}

      {/* Add Button Popup */}

      {_openButtonModal && (
        <Popup>
          <div className="AddButton">
            <div className="text-end my-3 Close">
              <img
                width={25}
                src="images/Cross.png"
                alt="Close"
                onClick={() => setOpenButtonModal(false)}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Button Style</h5>
                </div>

                <div>
                  <p>Filled with solid color or outlined</p>
                </div>
              </div>

              <div>
                <select
                  className="px-3 py-1"
                  value={_StoreAddButtonConfig.ButtonStyle}
                  onChange={(e) =>
                    setStoreAddButtonConfig((prevdata) => ({
                      ...prevdata,
                      ButtonStyle: e.target.value,
                    }))
                  }
                >
                  <option value="Fill">Fill</option>
                  <option value="Bordered">Bordered</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Button Text</h5>
                </div>

                <div>
                  <p>Add call to action of button ie. name</p>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreAddButtonConfig.ButtonText}
                  onChange={(e) =>
                    setStoreAddButtonConfig((prevdata) => ({
                      ...prevdata,
                      ButtonText: e.target.value,
                    }))
                  }
                  placeholder="Button"
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Color</h5>
                </div>

                <div>
                  <p>Button color</p>
                </div>
              </div>

              <div>
                <div className="ColorPicker d-flex align-items-center">
                  <input
                    className="px-3 py-1"
                    type="color"
                    value={_StoreAddButtonConfig.Color}
                    onChange={(e) =>
                      setStoreAddButtonConfig((prevdata) => ({
                        ...prevdata,
                        Color: e.target.value,
                      }))
                    }
                  />

                  <p>{_AddButtonConfig.Color}</p>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Button Size</h5>
                </div>

                <div>
                  <p>Size of button</p>
                </div>
              </div>

              <div>
                <select
                  className="px-3 py-1"
                  value={_StoreAddButtonConfig.ButtonSize}
                  onChange={(e) =>
                    setStoreAddButtonConfig((prevdata) => ({
                      ...prevdata,
                      ButtonSize: e.target.value,
                    }))
                  }
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Button Icon</h5>
                </div>

                <div>
                  <p>Toggle icon</p>
                </div>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={_StoreAddButtonConfig.Icon}
                  onChange={(e) =>
                    setStoreAddButtonConfig((prevdata) => ({
                      ...prevdata,
                      Icon: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="Buttons">
              <div className="Save my-2">
                <button className="w-100 py-2" onClick={() => handleSave()}>
                  Save Button
                </button>
              </div>

              <div className="Delete my-2">
                <button className="w-100" onClick={() => handleDelete()}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Popup>
      )}

      {/* Room Popup */}

      {_openRoomModal && (
        <Popup>
          <div className="AddButton">
            <div className="text-end my-3 Close">
              <img
                width={25}
                src="images/Cross.png"
                alt="Close"
                onClick={() => setOpenRoomModal(false)}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Suite Type</h5>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreRoomConfig.SuiteName}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      SuiteName: e.target.value,
                    }))
                  }
                  placeholder="Suite"
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Suite Price</h5>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreRoomConfig.Charges}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      Charges: e.target.value,
                    }))
                  }
                  placeholder="$100/Night"
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Double Bedroom Icon</h5>
                </div>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={_StoreRoomConfig.DoubleBed}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      DoubleBed: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Bathtub Icon</h5>
                </div>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={_StoreRoomConfig.Bathtub}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      Bathtub: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>AirConditioner Icon</h5>
                </div>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={_StoreRoomConfig.AirConditioner}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      AirConditioner: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Free Wifi Icon</h5>
                </div>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={_StoreRoomConfig.FreeWifi}
                  onChange={(e) =>
                    setStoreRoomConfig((prevdata) => ({
                      ...prevdata,
                      FreeWifi: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>

            <div className="Buttons">
              <div className="Save my-2">
                <button className="w-100 py-2" onClick={() => handleRoomSave()}>
                  Save Button
                </button>
              </div>
            </div>
          </div>
        </Popup>
      )}

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
                <button className="w-100 py-2" onClick={() => handleServiceSave()}>
                  Save Button
                </button>
              </div>
            </div>
          </div>
        </Popup>
      )}

      {/* Team Popup */}

      {_openTeamModal && (
        <Popup>
          <div className="AddButton">
            <div className="text-end my-3 Close">
              <img
                width={25}
                src="images/Cross.png"
                alt="Close"
                onClick={() => setOpenTeamModal(false)}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Person Name</h5>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreTeamConfig.Name}
                  onChange={(e) =>
                    setStoreTeamConfig((prevdata) => ({
                      ...prevdata,
                      Name: e.target.value,
                    }))
                  }
                  placeholder="James"
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <div>
                  <h5>Profession Name</h5>
                </div>
              </div>

              <div>
                <input
                  className="px-3 py-1"
                  type="text"
                  value={_StoreTeamConfig.Profession}
                  onChange={(e) =>
                    setStoreTeamConfig((prevdata) => ({
                      ...prevdata,
                      Profession: e.target.value,
                    }))
                  }
                  placeholder="Manager"
                />
              </div>
            </div>

            <div className="Buttons">
              <div className="Save my-2">
                <button className="w-100 py-2" onClick={() => handleTeamSave()}>
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

export default Home;
