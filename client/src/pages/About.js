import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            About Our Bookstore Welcome to
            <h2>Bma Book Store</h2>, your go-to online destination for all
            things books. We are passionate about literature and committed to
            providing you with an exceptional reading and shopping experience.
            <br></br>
            <br></br>
            <h2>Our Story</h2>
            <br></br>
            <br></br> Our journey began in 2023 when a group of book enthusiasts
            came together to create a platform where bookworms of all ages could
            discover, explore, and purchase their favorite titles. Over the
            years, we've grown into a thriving community of readers, writers,
            and storytellers.
            <br></br>
            <br></br>
            <h2>Contact Us</h2>
            <br></br>
            <br></br>
            We value your feedback and welcome any questions or suggestions.
            Feel free to reach out to us at kummarabheema@gmail.com or get in
            touch by contact - 6300219562.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
