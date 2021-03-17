import image from "./assets/image.png";
export const model = [
  {
    type: "title",
    value: "Pure JavaScript Site Constructor",
    options: {
      tag: "h2",
      // styles: `background:linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`,
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        padding: "1.5rem",
        "text-align": "center",
      },
    },
  },
  { type: "text", value: "Here will be some text" },
  { type: "columns", value: ["1111111", "2222222", "3333333"] },
  { type: "image", value: image },
];
