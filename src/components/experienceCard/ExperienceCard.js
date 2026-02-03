import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        {isExpanded && (
          <ul>
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        )}
        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <div
            className={
              isDark
                ? "experience-card-stepper dark-mode-text"
                : "experience-card-stepper"
            }
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
              textAlign: "right",
              fontSize: "14px",
              color: isDark ? "#00dcd9" : "#306eff", // Highlighted color (Cyan in dark, Blue in light)
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "5px"
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Close" : "Read More"}
            <span style={{ fontSize: "12px" }}>{isExpanded ? "▲" : "▼"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
