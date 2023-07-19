import React, { useEffect } from "react";
import homeIcon from "../assets/home.svg";
import { useSelector, useDispatch } from "react-redux";
import chevronRightIcon from "../assets/chevronRightGray.svg";
import { toggleEditMode } from "../slices/editModeSlice";

const BreadCrumbs = () => {
  const editMode = useSelector((state) => state.editMode);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    console.log(editMode);
    dispatch(toggleEditMode());
  };

  const title = useSelector((state) => state.description.title);
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
      <div className="w-full mb-4 sm:mb-0">
        <ol className="list-none p-0 flex">
          <li className="flex items-center">
            <img
              src={homeIcon}
              alt="Home Icon"
              className="h-4 w-4 text-gray-500 mx-1 sm:mx-2"
            />
          </li>
          <li className="flex items-center">
            <img
              src={chevronRightIcon}
              alt="Chevron Right Icon"
              className="h-4 w-4 text-gray-500 mx-1 sm:mx-0"
            />
            <a
              href="/products"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Offer
            </a>
          </li>
          <li className="flex">
            <img
              src={chevronRightIcon}
              alt="Chevron Right Icon"
              className="h-4 w-4 text-gray-500 mx-1 sm:mx-2"
            />
            <span className="text-gray-700 text-sm truncate">{title}</span>
          </li>
        </ol>
      </div>
      <button
        className="bg-[var(--custom-bg-color)] text-white py-2 px-4 self-start sm:self-end text-sm"
        type="button"
        onClick={handleEditClick}
      >
        {editMode.editMode ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default BreadCrumbs;
