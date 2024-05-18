import React from "react";
import fit from "../images/strength.svg";
import Healthy from "../images/energy.svg";
import apple from "../images/heart.svg";
import Confidence from "../images/confidence2.svg";
import Signature from "../images/SignatureBOTeam.webp";
// import '../components/section2.css';

function Product() {
  return (
    <div>
      <div className="tab-content-item mt-3 ml-4 mb-8 mr-4 active">
        <h2 className="tab__title text-4xl font-bold text-primary text-customBgColorHSL">
          What is Boostaro?
        </h2>
        <div className="tab__line h-0.5 w-20 bg-orange-400 my-3"></div>
        <p className="tab__disclaimer">
          Boostaro is already a top-selling supplement in 2023. And that’s
          because it’s helping people everywhere to maintain the movement,
          happiness, and confidence they had from their youth.
        </p>
        <div className="tab__body">
          <h3 className="tab__body--title text-2xl font-bold text-primary text-customBgColorHSL mt-5">
            Here's Everything That Boostaro Can Help You With
          </h3>
          <ul className="flex flex-wrap gap-5 my-5 sm:grid sm:grid-cols-2 md:grid-cols-4">
            <li className="flex flex-col items-center text-center">
              <img
                className="w-12 h-12 m-2"
                src={fit}
                alt="Healthy Weight Control"
                width="48"
                height="48"
              />
              <b className="text-primary-dark ">Healthy Erections</b>
              <p className="font-light">Blood Circulation Super Blend</p>
            </li>
            <li className="flex flex-col items-center text-center">
              <img
                className="w-12 h-12 m-2"
                src={Healthy}
                alt="Healthy Weight Control"
                width="48"
                height="48"
              />
              <b className="text-primary-dark">Increase Energy</b>
              <p className="font-light">
                Healthy sex life for better quality of life
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <img
                className="w-12 h-12 m-2"
                src={apple}
                alt="Healthy Weight Control"
                width="48"
                height="48"
              />
              <b className="text-primary-dark">Boost Blood Flow</b>
              <p className="font-light">
                Boost healthy circulation and blood flow
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <img
                className="w-12 h-12 m-2"
                src={Confidence}
                alt="Healthy Weight Control"
                width="48"
                height="48"
              />
              <b className="text-primary-dark">Confidence</b>
              <p className="font-light">Enjoy your love life again!</p>
            </li>
          </ul>
          <div className="tab__line h-0.5 w-full bg-orange-400 my-8"></div>
          <h3 className="tab__body--title text-primary text-2xl font-bold mt-10 text-customBgColorHSL">
            "Healthy Circulation is the Key to Erections"
          </h3>
          <p className="tab__body--text mt-5">
            A group of health enthusiasts and researchers created Boostaro to
            help people like you. Our products are manufactured in the USA
            following Good Manufacturing Practices (GMP) certified practices.
            That means you can feel confident knowing that Boostaro was
            formulated by experts, and is manufactured by trusted professionals.
          </p>
          <div className="signature mt-8">
            <img
              className="mix-blend-multiply"
              src={Signature}
              alt=""
              width="200"
              height="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
