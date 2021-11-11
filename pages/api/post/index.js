// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// sort posts by date
const sortPosts = (posts) => {
  return posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

// get random image
const getRandomImagesApiUnsplash = (count = 10) => {
  return fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${process.env.accessKeyUnsplash}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.map((item) => item.urls.small);
    });
};

// get random
const getRandom = (images = [], i) => {
  return images[i]
    ? images[i]
    : images[Math.floor(Math.random() * images.length)];
};

export default async function listPost(_req, res) {
  // get api posts data
  try {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=15"
    );
    const posts = await result.json();

    const images = await getRandomImagesApiUnsplash(posts.length);

    const sortedPosts = sortPosts(posts).map((p, i) => ({
      id: p.id,
      title: p.title,
      body: p.body,
      thumbnail: getRandom(images, i),
    }));

    res.status(200).json({
      count: posts.length,
      posts: sortedPosts,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
