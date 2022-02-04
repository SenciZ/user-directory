import React from "react";
import ItemDisplay from "./ItemDisplay";
import Controls from "./Controls";
import { useState, useEffect } from "react";
import Data from "../ObjectData/data";
import EditModal from "./EditModal";

function Display() {
  const list = Data;
  const [currentItem, setCurrentItem] = useState(0);
  const [data, setData] = useState(list);
  const itemId = currentItem + 1;

  const functions = {
    clickHandlerNext: () => {
      if (currentItem === data.length - 1) {
        return;
      } else {
        setCurrentItem(currentItem + 1);
      }
    },
    clickHandlerPrevious: () => {
      if (currentItem === 0) {
        return;
      } else {
        setCurrentItem(currentItem - 1);
      }
    },

    deleteHandler: () => {
      setData(data.filter((item, index) => index !== currentItem));
    },

    // editHandler: () => {
    //   const modality = document.getElementById("modal");
    //   modality.class.remove("modalControl");
    // },

    hideModal: () => {},

    editDataItem: (editedItem) => {
      const dataNew = data.slice(0);
      dataNew.splice(currentItem, 1, editedItem);
      setData(dataNew);
      setCurrentItem(currentItem + 1);
    },
  };

  return (
    <div className="mainDisplay">
      <EditModal
        editDataItem={functions.editDataItem}
        data={data}
        currentItem={itemId}
      />
      <ItemDisplay data={data} currentItem={currentItem} />
      <Controls function={functions} />
    </div>
  );
}

export default Display;
