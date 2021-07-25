import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./ImageGrid";

function ImageSearch() {
  const [searchText, setSearchText] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  

  useEffect(() => {}, [searchText, loading, images]); 

  useEffect(() => {
    
    getImages("");
  }, []);

  const getImages = (query) => {
    const url =
      "https://api.unsplash.com/search/photos?client_id=Qi4KeA-4K9Aw6HV_90xIgfyQMYAJN42SgEzwu2M9arU&page=1&query=" +
      query;
    axios
      .get(url)
      .then((res) => {
        setImages(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validate = () => searchText.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      getImages(searchText);
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <h5 className="text-center mt-5">Pin Interest</h5>
      <div className="col-md-4  offset-md-4">
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <input
              className="form-control"
              type="text"
              onChange={handleSearchChange}
            ></input>

            <input
              className="btn btn-outline-success"
              type="submit"
              value="Search"
            ></input>
          </div>
        </form>
      </div>

      {loading ? (
        <p className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </p>
      ) : (
        <>
          {images !== null && (
            <>
              {images.length === 0 ? (
                <p className="text-center">Enter Your Wish</p>
              ) : (
                <ImageGrid images={images}></ImageGrid>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ImageSearch;