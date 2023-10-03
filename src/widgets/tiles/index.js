import React from "react";
import { Card } from "../../shared/ui/card";
import "./style.css";
export const Tiles = ({ data }) => {
  const [dataTiles, setDataTiles] = React.useState(null);
  React.useEffect(() => {
    const arrayData = data.map((el) => {
      return Object.entries(el);
    });
    setDataTiles(arrayData);
  }, [data]);

  return (
    <div className="tiles">
      {dataTiles && dataTiles.map((el, i) => <Card data={el} key={i}></Card>)}
    </div>
  );
};
