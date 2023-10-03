import React from "react";
import "./style.css";
import { Tiles } from "../../widgets/tiles";
import { Table } from "../../shared/ui";
import { initialUsers, usersTableHeaders } from "../../shared/mock";
export const DataPage = () => {
  const [displayType, setDisplayType] = React.useState("table");

  const viewBtnHandler = (e) => {
    e.target.id === "table" ? setDisplayType("table") : setDisplayType("tiles");
  };

  return (
    <div className="page">
      <div className="toolbar">
        <p>Type of view: </p>
        <button
          className={`toolbar__btn ${
            displayType === "table" ? "toolbar__btn_type_active" : ""
          }`}
          id="table"
          onClick={(e) => viewBtnHandler(e)}
        >
          Table
        </button>
        <button
          className={`toolbar__btn ${
            displayType !== "table" ? "toolbar__btn_type_active" : ""
          }`}
          id="tiles"
          onClick={(e) => viewBtnHandler(e)}
        >
          Tiles
        </button>
      </div>
      <div className="page__content">
        {displayType === "table" ? (
          <Table headerData={usersTableHeaders} data={initialUsers} />
        ) : (
          <Tiles data={initialUsers}></Tiles>
        )}
      </div>
    </div>
  );
};
