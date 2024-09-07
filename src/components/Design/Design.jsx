import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const fetchedImages = await imageLoader(searchTerm);
      setImages(fetchedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="bg-gray-600 min-h-screen">
      {/* Search Section */}
      <section id="search" className="py-4 bg-gray-600">
        <div className="container mx-auto p-8 w-2/3 bg-gray-200 rounded-xl">
          <h2 className="text-5xl font-bold mb-8 text-center text-gray-900">
            Search Images
          </h2>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search for resources for projects..."
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6">
            {images.map((image) => (
              <div key={image.id} className="bg-gray-300 p-2 rounded-xl">
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Fetch images based on the search term
const imageLoader = async (searchTerm) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${
      import.meta.env.REACT_APP_SECRET_KEY
    }`
  );
  const data = await response.json();
  console.log(data);

  // Map the response data to a format that matches your state structure
  return data.results.map((image) => ({
    id: image.id,
    src: image.urls.small,
  }));
};

export default Search;
