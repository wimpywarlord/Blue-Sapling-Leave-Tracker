import React, { useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";

import "../css/HolidayListItem.css";

const HolidayListItem = (props) => {
  const {
    id,
    nameOfTheHoliday = "",
    dateOfTheHoliday,
    dayOfTheHoliday,
    remarkOfTheHoliday,
  } = props;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="make-things-center-x">
      <div className="holiday-list-item-individual-div-element my-3">
        <Row className="p-0 m-0">
          <Col className="m-0 p-0 make-things-center-x-and-y" xs={1}>
            {nameOfTheHoliday?.includes("*") ? (
              <div className="holiday-list-item-type-of-holiday-mandatory"></div>
            ) : (
              <div className="holiday-list-item-type-of-holiday-optional"></div>
            )}
          </Col>
          <Col
            xs={9}
            className="m-0 p-0 ps-2 holiday-list-item-name-of-holiday"
          >
            <Row className="m-0 p-0">
              <span className="m-0 p-0 name-of-the-holiday-span">
                {nameOfTheHoliday}
              </span>
            </Row>
            <Row className="m-0 p-0">{`${dateOfTheHoliday}, ${dayOfTheHoliday}`}</Row>
          </Col>
          <Col xs={2} className="m-0 p-0 make-things-center-x-and-y">
            {remarkOfTheHoliday ? (
              <div>
                <img
                  ref={target}
                  alt="holiday-info-icon"
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  src="https://img.icons8.com/color/18/000000/info--v1.png"
                />
                <Overlay target={target.current} show={show} placement="top">
                  {(props) => (
                    <Tooltip id={id} {...props}>
                      {remarkOfTheHoliday}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HolidayListItem;
