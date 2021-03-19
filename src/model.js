import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = `Cool Video. <a href='https://youtu.be/0ViiJ8qTCFM' target='_blank'> Cool Video.`;

export const model = [
  new TitleBlock("Pure JavaScript Site Constructor", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "1.5rem",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Course Image",
  }),
  new ColumnsBlock(
    [
      "Pure JavaScript Application, without libreris",
      "SOLID and OOP technology in one course",
      "JavaScript is essy and learn to create any UI",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        color: "#fff",
        padding: "2rem",
        "font-weigt": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      padding: "1rem",
      "font-weigt": "bold",
    },
  }),
];
