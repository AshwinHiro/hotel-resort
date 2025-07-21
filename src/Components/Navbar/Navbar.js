import React, { useState, useEffect} from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [_scrolled, setScrolled] = useState(false);
  const [_activeMenu, setActiveMenu] = useState("HOME");
  const [_activeSubMenu, setActiveSubMenu] = useState("HOME 1");
  const [_toggleSubMenu, setToggleSubMenu] = useState(false);

  const Menus = [
    {
      MenuName: "HOME",
      SubMenus: [
        { SubMenuName: "HOME 1", ToLink: "/" },
        { SubMenuName: "HOME 2", ToLink: "" },
      ],
    },
    {
      MenuName: "ABOUT",
      SubMenus: [],
      ToLink: ""
    },
    {
      MenuName: "SERVICE",
      SubMenus: [],
      ToLink: "/services"
    },
    {
      MenuName: "PAGES",
      SubMenus: [
        { SubMenuName: "PAGES 1", ToLink: "/" },
        { SubMenuName: "PAGES 2", ToLink: "/" },
      ],
      ToLink: ""
    },
    {
      MenuName: "CONTACT US",
      SubMenus: [],
      ToLink: ""
    },
  ];

  const handleActiveMenu = (MenuName, SubMenus) => {

    setActiveMenu(MenuName);

    if(SubMenus.length === 0) {
        setActiveSubMenu("");
        setToggleSubMenu(false);
        return;
    }


    if(SubMenus.length > 0) {
        if(_toggleSubMenu) {
            setToggleSubMenu(false);
            return;
        }
        else if(!_toggleSubMenu){
            setToggleSubMenu(true);
            return;
        }
    }

    
    setActiveSubMenu(SubMenus[0].SubMenuName);
    
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavMenu = ({ MenuName, SubMenus, ToLink= "" }) => {
    return (
      <div className="NavMenu mx-2">
        <div className="d-flex" onClick={() => handleActiveMenu(MenuName, SubMenus)}>
          <p className={`mx-2 ${_activeMenu === MenuName ? "Active" : ""}`}>
            {
              ToLink === "" ? MenuName :
              <NavLink to={ToLink}>{MenuName}</NavLink>
            }

            {_activeMenu === MenuName && (
              <div className="d-flex justify-content-center">
                <span className="ActiveCircle mt-1"></span>
              </div>
            )}
          </p>

          {SubMenus.length > 0 && (
            <div>
              <img
                width={10}
                src={
                  _activeMenu === MenuName
                    ? "images/Down_Arrow.png"
                    : "images/Down_Arrow_White.png"
                }
                alt="Down Arrow"
              />
            </div>
          )}
        </div>

        {
            (_toggleSubMenu && _activeMenu === MenuName && SubMenus.length > 0) && 
            (
                <div className="SubMenuContainer p-3">

                    {
                        SubMenus.map(
                            ({SubMenuName, ToLink}) => ToLink === "" ? <p className={`d-flex align-items-center my-2 mx-3 ${_activeSubMenu === SubMenuName ? "Active" : ""}`} onClick={() => {setActiveSubMenu(SubMenuName);setToggleSubMenu(false)}}>{SubMenuName} {_activeSubMenu === SubMenuName && <span className="ActiveCircle mx-3"></span>}</p> : <NavLink to={ToLink}><p className={`d-flex align-items-center my-2 mx-3 ${_activeSubMenu === SubMenuName ? "Active" : ""}`} onClick={() => {setActiveSubMenu(SubMenuName);setToggleSubMenu(false)}}>{SubMenuName} {_activeSubMenu === SubMenuName && <span className="ActiveCircle mx-3"></span>}</p></NavLink>
                        )
                    }

                </div>
            )
        }

      </div>
    );
  };

  return (
    <div className={`position-fixed w-100 ${_scrolled ? 'NavBg' : ''}`}>
      <div className="container NavBar py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div>
            <img src="images/Imperial_Logo.png" alt="Imperial Logo" />
          </div>

          {/* Menus */}
          <div className="d-flex">
            {Menus.map((Menu, index) => (
              <NavMenu key={index} {...Menu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
