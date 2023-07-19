import React, { useEffect } from "react";
import Image from "../assets/image.png";

import { useSelector, useDispatch } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const HeroContainer = () => {
  const editMode = useSelector((state) => state.editMode);
  const backgroundColor = useSelector(
    (state) => state.configuration.configuration.mainColor
  );
  const description = useSelector((state) => state.description);
  const title = useSelector((state) => state.description.title);
  let headers = useSelector((state) => state.description);
  console.log("title is ", title);
  let editor;
  function saveEditorContent() {
    if (editor) {
      const editorData = editor.getData();
      console.log("Editor Content:", editorData);

      editor.destroy();
      editor = null;

      const editorDiv = document.querySelector("#editor");
      editorDiv.innerHTML = editorData;
    }
  }
  useEffect(() => {
    if (editMode.editMode) {
      editor = ClassicEditor.create(document.querySelector("#CKeditable"));
    }

    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editMode.editMode]);

  return (
    <div className="bg-white  shadow-lg">
      <div className="relative flex items-center justify-center h-100 w-400">
        <img alt="edit" src={headers.headerImage} className="object-cover" />
        <div className="absolute top-0 left-0">
          <button
            style={{ "--custom-bg-color": backgroundColor }}
            className="bg-[var(--custom-bg-color)] text-white py-4 px-4 rounded-tl-[20%] rounded-tl-none"
          >
            P
          </button>
          <button
            contentEditable={editMode.editMode}
            className="bg-white text-black py-4 px-6 rounded-br-[20%] rounded-bl-none "
          >
            {headers.type}
          </button>
        </div>
      </div>
      <div className="p-4">
        <div
          contentEditable={editMode.editMode}
          className="text-gray-700 font-open-sans font-medium text-base leading-6"
        >
          {title}
        </div>
        <div
          id="CKeditable"
          contentEditable={editMode.editMode}
          className="text-gray-600 py-2  font-normal text-sm leading-7"
        >
          {description.description}
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
