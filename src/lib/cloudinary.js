const loader = ({ src, width, quality }) => {
  const params = [
    "f_auto",
    "c_limit",
    "w_" + width,
    "q_" + (quality || "auto"),
  ];
  const paramsString = params.join(",") + "/";
  const source = src[0] === "/" ? src.slice(1) : src;

  return `https://res.cloudinary.com/cerimorse-com/image/upload/${paramsString}${source}`;
};

export { loader };
