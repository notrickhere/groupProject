import React from "react";
import { bestBuyList } from "../dummydata";
import { useParams } from "react-router-dom";

function SingleItem() {
  let { id } = useParams();
  const singleItem = bestBuyList.filter((item) => (item.id = id));
  return <div>{singleItem.description}</div>;
}

export default SingleItem;
