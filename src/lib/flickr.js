const apiKey = process.env.FLICKR_API_KEY;

const sizeSuffix = {
  75: "s",
  100: "t",
  150: "q",
  240: "m",
  320: "n",
  400: "w",
  500: "",
  640: "z",
  800: "c",
  1024: "b",
};

const loader = ({ src, width }) => {
  const [source, format] = src.split(".");

  const suffixWidth = Object.keys(sizeSuffix).reduce((a, b) => {
    const aDiff = Math.abs(a - width);
    const bDiff = Math.abs(b - width);

    if (aDiff === bDiff) {
      return a > b ? a : b;
    } else {
      return bDiff < aDiff ? b : a;
    }
  });

  const suffix = sizeSuffix[suffixWidth];

  return `https://live.staticflickr.com/${source}_${suffix}.${format}`;
};

const getAlbumPhotos = async () => {
  const response = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=72177720297374250&format=json&nojsoncallback=1`,
    {
      cache: "no-store",
    }
  );

  return response;
};

export { loader, getAlbumPhotos };
