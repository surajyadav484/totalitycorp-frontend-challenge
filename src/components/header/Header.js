import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useClickedOutside } from "../../hooks/useClickedOutside";
import { useGetHeaderSticky } from "../../hooks/useGetHeaderSticky";
import { headerMenus } from "./headerMenus";

const Header = () => {
  const ref = useRef();
  const sideBarRef = useRef();
  const [isSiderBar, setIsSideBar] = useState(false);
  // useGetHeaderSticky(ref);
  useClickedOutside(sideBarRef, () => setIsSideBar(false));
  let menus = headerMenus.map((menu) => (
    <div className="header-links" key={menu.id}>
      <li>{menu.name}</li>
      <i className="fa fa-angle-down"></i>
      <div className="modal">
        <ul>
          {menu?.subMenus?.map((subMenu) => (
            <div key={subMenu.title} className="modal-content">
              {subMenu?.title && <h4>{subMenu.title}</h4>}

              {subMenu?.subTitles?.map((subTitle) => (
                <li key={subTitle}>
                  <a href="#">{subTitle}</a>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <>
      <div className="header-container">
        <div ref={ref} className="header">
          <div className="barsMenuIcon">
            <i className="fa fa-bars" onClick={() => setIsSideBar(true)}></i>
          </div>
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg"
            alt="Electronics Arts Home"
          />
          <ul className="header1440">{menus}</ul>
        </div>
      </div>
      {isSiderBar && (
        <div className="header1024">
          <div className="header1024-blackBG"></div>
          <div ref={sideBarRef} className="header1024-sidebar">
            <Accordion allowZeroExpanded allowMultipleExpanded>
              <div className="siderbar-logo">
                <img
                  className="header-links"
                  src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg"
                  alt="Electronics Arts Home"
                  style={{
                    border: "none",
                    marginTop: "10px",
                    display: "inline-block",
                  }}
                />
                <i
                  className="fa fa-times"
                  style={{
                    marginRight: "14px",
                    marginTop: "13px",
                    fontSize: "1.5rem",
                  }}
                  aria-hidden="true"
                  onClick={() => setIsSideBar(false)}
                ></i>
              </div>
              {headerMenus.map((menu) => (
                <AccordionItem key={menu.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="header-links">
                      {menu.name} <i className="fa fa-angle-down"></i>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    {menu?.subMenus?.map((subMenu) => (
                      <div key={subMenu.title} className="modal-content">
                        {subMenu?.title && <h4>{subMenu.title}</h4>}

                        {subMenu?.subTitles?.map((subTitle) => (
                          <li key={subTitle}>
                            <a href="#">{subTitle}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
