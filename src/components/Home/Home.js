import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  // fetch data using useEffect and assing to packages variable
  useEffect(() => {
    fetch("https://enigmatic-stream-34553.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const tem = [data[0], data[1], data[2], data[3], data[4], data[5]];
        setProducts(tem);
        setLoading(true);
      });
  }, []);
  useEffect(() => {
    fetch("https://enigmatic-stream-34553.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <h1 className="my-5">Our Products</h1>
        {!loading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div className="row">
          {products.map((product) => (
            <Products product={product} key={product._id}></Products>
          ))}
        </div>
      </div>
      <hr />
      <h2 className="my-4">Customer Review</h2>
      <div className="container">
        {reviews.length > 0 && (
          <Carousel 
          show={3} 
          slide={2} 
          transition={0.5} 
          rightArrow={<i className="fas fa-arrow-circle-right mt-4 fs-2 pl-3 arrow"></i>} 
          leftArrow={<i className="fas fa-arrow-circle-left mt-4 fs-2 arrow"></i>} >
            {reviews.map((review) => (
              <div key={review._id} className="p-lg-4 review-container">
                <div className="d-flex justify-content-around">
                  <ReactStars
                    count={5}
                    size={24}
                    value={parseInt(review.rating)}
                    edit={false}
                    readonly
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  {review.date}
                </div>
                <small>
                  <i >{review.description}</i>
                </small>
                <p className=" text-end">---{review.name}</p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <h2 className="mt-5">Top Stories</h2>
      <hr />
      <div className="container stories mb-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <img
              src="https://www.watches-of-switzerland.co.uk/medias/Top-Story-Christmas-OMEGA.png?context=bWFzdGVyfHJvb3R8NjQ2MDc4fGltYWdlL3BuZ3xoYjYvaDI4LzkxMjE3NjQ5OTkxOTgucG5nfDg3YzAyZmRlZTliZGJhMTA1NDE0MzJmNDczYTc1Njk2ZWQzYzIwYWYyMjIxOWJlZGJmY2FmOWY4Nzc0MDdiNDE&imwidth=640"
              alt=""
            />
            <h6>ViewPoints</h6>
            <p>
              MALE MODEL DAVID GANDY'S WISHLIST TO REALISE EVERYONE'S DREAMS
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="col-lg-4">
            <img
              src="https://www.watches-of-switzerland.co.uk/medias/Top-Story-Christmas-IWC.png?context=bWFzdGVyfHJvb3R8NDAwODg0fGltYWdlL3BuZ3xoOWIvaGFkLzkxMjE3NjUzOTI0MTQucG5nfDA0MWVkN2ZiNTFiZTVkZDUwZjEwZWU4OTNmMWQ0ZjkxZjhmZWNlZjhiYmJhNzc1NmE4MmEyYzI3YzlhNzhlYzQ&imwidth=640"
              alt=""
            />
            <h6>ViewPoints</h6>
            <p>
              WATCH EDITOR ROBIN SWITHINBANK'S PERFECT WISHLIST FOR THOSE
              SEEKING LUXURY
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="col-lg-4">
            <img
              src="https://www.watches-of-switzerland.co.uk/medias/Top-Story-Christmas-Mark.png?context=bWFzdGVyfHJvb3R8NTA0MDE2fGltYWdlL3BuZ3xoMzAvaGZkLzkxMjE3NjUwNjQ3MzQucG5nfGE5MmE4NzE1ZDFhMjhlMDI3ZjE5MDZmYTMzMGQwZTQ5MDJmMzAzNGJhYWNiNDFiNmFiYTg3M2UwNzgxMWVlMWQ&imwidth=640"
              alt=""
            />
            <h6>ViewPoints</h6>
            <p>OUR EXPERT'S WISHLIST – MARK TOULSON, HEAD OF WATCH BUYING</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
