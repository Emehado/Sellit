import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", parseFloat(listing.price));
  data.append("categoryId", listing.category.id);
  data.append("user", listing.user);
  data.append("description", listing.description);

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: `image${index}`,
      type: "image/jpeg",
      uri: image,
    });
  });

  return client.post(endpoint, data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  getListings,
  addListing,
};
