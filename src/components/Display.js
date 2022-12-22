import React from "react";
import ItemDisplay from "./ItemDisplay";
import Controls from "./Controls";
import { useState, useEffect } from "react";
import Data from "../ObjectData/data";
import EditModal from "./EditModal";
import CreateItem from "./CreateItem";

function Display() {
  const list = Data;
  const [showModal, setShowModal] = useState(false)
  const [create, setCreate] = useState(false)
  const [currentItem, setCurrentItem] = useState(0);
  const [data, setData] = useState(list);
  const functions = {
    clickHandlerNext: () => {
      if (currentItem === data.length - 1) {
        return;
      } else {
        setCurrentItem(currentItem+1);
        console.log(currentItem+1);
      }
    },
    clickHandlerPrevious: () => {
      if (currentItem === 0) {
        return;
      } else {
        setCurrentItem((prev) => prev - 1);
      }
    },

    deleteHandler: () => {
      setData(prev => prev.filter((item, index) => index !== currentItem));
      setCurrentItem(prev => {
      if(currentItem === 0){
        return 0;
      } else if(currentItem === data.length-1) {
        return prev -1;
      }
        return prev;
      })
    },

    hideModal: () => {},

    editDataItem: (editedItem) => {
      const dataNew = data.slice(0);
      dataNew.splice(currentItem, 1, editedItem);
      setData(dataNew);
    },
  };

  const setModalOpen = ()=>{
   setShowModal(prev => !prev)
  }

  const setCreateVisible = () => {
    setCreate(!create);
  }

  const addItemToList = (newItem) =>{
    setData(prev => [...prev, newItem])
  }

  return (
    <div className="mainDisplay">
      {showModal && <EditModal
        editDataItem={functions.editDataItem}
        data={data[currentItem]}
        modalIsOpen={ setModalOpen }
      />}
      <ItemDisplay data={data} currentItem={currentItem} />
      <Controls function={functions} modalIsOpen={ setModalOpen } createItemVisible = { setCreateVisible }/>
      {create && <CreateItem data={ data } updateList={addItemToList} createItemVisible = { setCreateVisible }/>}
    </div>
  );
}

export default Display;
