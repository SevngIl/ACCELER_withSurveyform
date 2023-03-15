import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Pc, Mobile } from "./Responsive";

function Vision() {
  return (
    <>
      <Pc>
        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require("../assets/vision/vision1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Chatbot</h2>
              <p>Chatbots will be more intelligent, empathetic, and personalized.
                <br></br> Chatbots will be designed to understand the context of a conversation and provide relevant and personalized responses. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/vision/vision2.png")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Database</h2>
              <p>Databases will be more focused on data integration, real-time analytics, and AI-driven automation.
                <br></br> Databases will be designed to handle large volumes of structured and unstructured data, from various sources and formats.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/vision/vision3.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>System Architecture</h2>
              <p>
                System architecture will be more focused on scalability, flexibility, and security.
                <br></br>Systems will be designed to seamlessly integrate with cloud platforms, enabling efficient resource allocation and management.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Pc>
      <Mobile>
        <Carousel>
          <Carousel.Item >
            <img
              className="vision_img d-block w-100"
              src={require("../assets/vision/vision1_mobile.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Chatbot</h2>
              <p>Chatbots will be more intelligent, empathetic, and personalized.
                <br></br> Chatbots will be designed to understand the context of a conversation and provide relevant and personalized responses. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="vision_img d-block w-100"
              src={require("../assets/vision/vision2_mobile.png")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Database</h2>
              <p>Databases will be more focused on data integration, real-time analytics, and AI-driven automation.
                <br></br> Databases will be designed to handle large volumes of structured and unstructured data, from various sources and formats.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="vision_img d-block w-100"
              src={require("../assets/vision/vision3_mobile.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>System Architecture</h2>
              <p>
                System architecture will be more focused on scalability, flexibility, and security.
                <br></br>Systems will be designed to seamlessly integrate with cloud platforms, enabling efficient resource allocation and management.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Mobile>
    </>
  );
}

export default Vision;