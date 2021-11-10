const accessKey = "Gntck0hwEHtGvsJ9jCaa1jOaWNFqgHL5hm_Bpv2Bn8M";
// const secretKey = "hY9Zi8fehJt5KJCSOLHQQb-3xc0XKZIOYl5PvONZagI";

// get random image
const getImageByIdUnsplash = () => {
  return fetch(
    `https://api.unsplash.com/photos/random?count=1&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.map((item) => item.urls.small)[0];
    });
};

export default async function handler(req, res) {
  const { id } = req.query;

  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
  } else {
    const thumbnail = await getImageByIdUnsplash();
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post = await result.json();

      res.status(200).json({
        post: {
          ...post,
          thumbnail,
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
