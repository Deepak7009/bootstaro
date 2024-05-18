import React, { useState } from 'react';
import facts from './images/supplementFacts.webp';
import bottle1 from './images/FS_1_bottle.webp'
import bottle2 from './images/prod_3_bottles.webp'
import bottle3 from './images/prod_6_bottles.webp'

import card1 from './images/card_1.webp'
import card2 from './images/card_2.webp'
import card3 from './images/card_3.webp'
import card4 from './images/card_4.webp'
import card5 from './images/card_12.webp'
import card6 from './images/card_22.webp'
import card7 from './images/card_32.webp'
import card8 from './images/card_42.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Faq.css'

const FAQSection = () => {

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="w-full mb-4 overflow-hidden " style={{ background: "bg-black" }}>
      
      <div className="my-8 pb-10" style={{background:"#753363"}}>
        <h2 className="text-center text-5xl pt-4 font-bold mb-4 text-white">Frequently Asked Questions</h2>
        <div className='flexx' style={{ width: "100vw", display: "flex" }}>
          <ul className="space-y-2 w-3/4">
            <li className="border-2 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                <p>Is Fitspresso Right For Me?</p>
                <span>{openFaq === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 0 && (
                <p className="mt-2 text-black">
                  If you have weight issues and you keep getting heavier, then Fitspresso is for you. Fitspresso is designed to rapidly improve your weight loss efforts and has changed the lives of thousands of men and women aged 18 to 95.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                Is Fitspresso Safe?
                <span>{openFaq === 1 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 1 && (
                <p className="mt-2 text-black">
                  Fitspresso is a proprietary, natural formula manufactured in the USA at our FDA registered and GMP certified facility. We only use state of the art, precision engineered machinery under the strictest manufacturing standards. Each ingredient is tested and free of contaminants, it's 100% plant-based and always Non-GMO. We also conduct third-party inspection and quality control to ensure high purity and potency. We always advise you ask your doctor before taking anything, just to be safer.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                How Many Bottles Should I Order?
                <span>{openFaq === 2 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 2 && (
                <p className="mt-2 text-black">
                  We recommend taking Fitspresso for at least 3 to 6 months to improve digestion and support weight loss.. We offer a 6-bottle package that comes with 2 free bonus books and a 7th free bottle. This is the most popular package, which also comes with free shipping.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What's in a bottle of Fitspresso?
                <span>{openFaq === 3 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 3 && (
                <img src={facts} alt="" />
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What's The Best Way To Take Fitspresso?
                <span>{openFaq === 4 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 4 && (
                <p className="mt-2 text-black">
                  Take 1 capsule with a big glass of cold water once a day, preferably on an empty stomach to improve absorption. The proprietary blend of natural ingredients work quickly to support weight loss.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                Is This a One Time Payment?
                <span>{openFaq === 5 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 5 && (
                <p className="mt-2 text-black">
                  Yes, your order today is a one-time payment with no auto-ship, subscriptions, or hidden charges.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(6)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What if Fitspresso Doesn't Work For Me?
                <span>{openFaq === 6 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 6 && (
                <p className="mt-2 text-black">
                  Every single bottle of Fitspresso comes with our personal, 180-day, 100% money-back guarantee! If for any reason you're unsatisfied with your results, just return all the bottles (even if empty) for a full, no questions asked refund.
                </p>
              )}
            </li>
            <li className="border-gray-300 p-4 bg-white my-2 rounded-lg">
              <button
                onClick={() => toggleFaq(7)}
                className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center flxjsb"
              >
                What Do I Do Now?
                <span>{openFaq === 7 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
              </button>
              {openFaq === 7 && (
                <p className="mt-2 text-black">
                  Click on one of the package options below, enter your order details on our secure checkout page, and we'll ship your Fitspresso to you right away. Remember, when you order our 6-bottle package, you'll get 2 free bonus books, a free extra bottle, and free shipping as well.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>




      <div className='bg-white pt-4 flexx'>
        <div className="productss productss2 bg-white">
          <div className="border rounded-xl shadow-lg w-80 mb-6 ml-3 gry ert">
            <h3 className="text-center text-xl font-bold rounded-t-md bg-slate-400  text-white h-10">BASIC</h3>
            <div className="text-center text-lg mb-4">
              <div className='text-4xl font-black uppercase mt-4' style={{color:"#753363"}}>1 bottle</div><div className="text-center text-black mb-2"><b>30 Day Supply</b></div>
              <img src={bottle1} alt="" style={{ height: "290px" }} />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl text-purple-500 ' style={{color:"#753363"}}><sup className='text-2xl'>$</sup>59 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-gray-500 mb-4" style={{color:"#753363"}}>+ $9.99 Shipping</div><br /><br />
            <div className='w-full flexx'>
              <button className=" text-white w-3/4 py-2 rounded-full font-bold h-14 text-2xl" style={{background:"linear-gradient(1turn, #ffb301, #ffde00)"}}>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card1} alt="" className='qwe' />
              <img src={card2} alt="" className='qwe' />
              <img src={card3} alt="" className='qwe' />
              <img src={card4} alt="" className='qwe' />
            </div>
            <div className="text-center text-lg text-gray-500 mt-2" style={{color:"#753363"}}><span><s className='mr-2'>$128.99</s></span>$69.00</div>
          </div>

          <div className="border rounded-xl shadow-lg w-80 mb-6 prp" style={{background:"linear-gradient(180deg, #fffabe, #fff)"}}>
            <h3 className="text-center text-xl font-bold rounded-t-md text-white h-10" style={{background:"#753363"}}>MOST POPULAR</h3>
            <div className="text-center text-lg mb-4">
            <div className='text-4xl font-black uppercase mt-4' style={{color:"#753363"}}>6 bottles</div><div className="text-center text-black mb-2"><b>180 Day Supply</b></div>
              <img src={bottle3} alt="" style={{ height: "290px" }} />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl' style={{color:"#753363"}}><sup className='text-2xl'>$</sup>39 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-green-500 mb-2 flexx">
              <div>
              <div className='w-full flexx text-nowrap pqr  text-white' style={{background:"#cb5055"}}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1'/><b>FREE Bonus Bottle!</b></div>
              <div className='w-full flexx text-nowrap pqr bg-purple-700  text-white' style={{background:"hsl(316, 39%, 33%)"}}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1'/><b>2 FREE Bonus Books</b></div>
              <div className='w-full flexx text-nowrap pqr bg-green-600  text-white' style={{background:"#4c8c6f"}}><FontAwesomeIcon icon={faCheckCircle} className='mt-1 mr-1'/><b>FREE Fast Shipping</b></div>
              </div>
            </div>
            
            <div className='w-full flexx'>
              <button className="bg-yellow-500 text-white  w-3/4 py-2 rounded-full  font-bold h-14 text-2xl">Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card5} alt="" className='qwe' />
              <img src={card6} alt="" className='qwe' />
              <img src={card7} alt="" className='qwe' />
              <img src={card8} alt="" className='qwe' />
            </div>
            <div className="text-center text-lg text-gray-500 mt-2" style={{color:"#753363"}}><span><s className='mr-2'>$768.00</s></span>$234.00</div>
          </div>

          <div className="border rounded-xl shadow-lg w-80 mb-6 gry ert">
            <h3 className="text-center text-xl font-bold rounded-t-md bg-slate-400 text-white h-10">BUNDLE</h3>
            <div className="text-center text-lg mb-4">
            <div className='text-4xl font-black uppercase mt-4' style={{color:"#753363"}}>3 bottles</div><div className="text-center text-black mb-2"><b>90 Day Supply</b></div>
              <img src={bottle2} alt="" style={{ height: "290px" }} />
            </div>
            <div className="text-center text-2xl font-bold mb-2">
              <div className='text-6xl ' style={{color:"#753363"}}><sup className='text-2xl'>$</sup>49 <span className='text-xl'>/ bottle</span></div>
            </div>
            <div className="text-center text-green-500 mb-2 flexx">
              <div>
              <div className='w-full flexx text-nowrap pqr bg-purple-700  text-white' style={{background:"hsl(316, 39%, 33%)"}}><FontAwesomeIcon icon={faCheckCircle} className='mt-1'/>FREE Bonus Books</div>
              </div>
            <br />
            <br />
            </div>
            <div className="text-center text-gray-500 mb-4">FREE US Shipping</div>
            <div className='w-full flexx'>
              <button className="bg-yellow-500 text-white  w-3/4 py-2 rounded-full font-bold h-14 text-2xl">Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
            <div className='w-full flexx overflow-hidden mt-2'>
              <img src={card1} alt="" className='qwe' />
              <img src={card2} alt="" className='qwe' />
              <img src={card3} alt="" className='qwe' />
              <img src={card4} alt="" className='qwe' />
            </div>
            <div className="text-center text-lg text-gray-500 mt-2" style={{color:"#753363"}}><span><s className='mr-2'>$384.00</s></span>$117.00</div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4 mt-36 bg-white">
        <div className="text-2xl font-bold">Our Customers Say</div>
        <div className="text-lg text-yellow-500">⭐⭐⭐⭐⭐<FontAwesomeIcon icon={faCheckCircle} style={{color:"#753363"}}/> 4.9/5</div>
        <div className="text-sm text-gray-500">Based on 72,500+ reviews!</div>
      </div>
    </div>
  );
};

export default FAQSection;