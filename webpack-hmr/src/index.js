import createEditor from "./editor";

import bgImg from "./001.jpg";

if (module.hot) {
  const editor = createEditor();
  document.body.appendChild(editor);

  let lastEditor = editor;
  module.hot.accept("./editor", () => {
    const value = lastEditor.innerHTML;
    document.body.removeChild(lastEditor);
    const newEditor = createEditor();
    newEditor.innerHTML = value;
    document.body.appendChild(newEditor);
    lastEditor = newEditor;
  });
}

const img = new Image();
img.src = bgImg;
img.onload = (res) => {
  console.log("res", res);
  document.body.appendChild(img);
};

module.hot.accept("./001.jpg", () => {
  img.src = bgImg;
  console.log("bgImg", bgImg);
});
