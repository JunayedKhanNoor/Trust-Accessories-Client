import React from "react";
import {
  FcSupport,
  FcComboChart,
  FcCurrencyExchange,
  FcConferenceCall,
  FcCustomerSupport,
  FcBullish,
} from "react-icons/fc";
import { ImMakeGroup } from "react-icons/im";
import ceo from '../../assets/ceo.jpg'
import ac from '../../assets/account.jpg'
import en from '../../assets/engineer.jpg'

const Trust = () => {
  return (
    <>
      <div className="md:max-w-4xl mx-auto my-16  font-bold">
        <h1 className="text-2xl md:text-4xl uppercase text-center mb-6">
          Start to now we work with trust
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <div>
            <FcSupport className="h-20 w-20 ml-6" />
            <p>After sell service</p>
          </div>
          <div>
            <FcComboChart className="h-20 w-20 ml-6" />
            <p>Sustainable Growth</p>
          </div>
          <div>
            <FcCurrencyExchange className="h-20 w-20 ml-6" />
            <p>Global revenue</p>
          </div>
          <div>
            <FcConferenceCall className="h-20 w-20 ml-6" />
            <p>Happy clients</p>
          </div>
        </div>
      </div>

      <div className="md:max-w-7xl mx-auto my-24">
      <h1 className="text-2xl md:text-4xl text-center font-bold">Qualified Staff Of Engineers</h1>
        <p className="text-center text-xl mt-4">Expert Members</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12">
        
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ceo} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Anwar Ramadan
                  <div class="badge badge-secondary">Founder & CEO</div>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={en} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Osama Bakri
                  <div class="badge badge-secondary">Sener Engineer</div>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ac} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Omnia
                  <div class="badge badge-secondary">Account Manager</div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-7xl mx-auto my-16">
        <h1 className="text-2xl md:text-7xl text-center font-bold">Our Services</h1>
        <p className="text-center text-xl mt-4">Quality is our commitment</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12">
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <ImMakeGroup className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Innovation Model</h2>
              <p>
                {" "}
                Our Innovation model provides a detailed framework to identify, advance, and
                implement ideas.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <FcCustomerSupport className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Best Support</h2>
              <p>
                It's time for our team to adopt customer service, this guide will tell you what you
                need.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <FcBullish className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Sustainable Growth</h2>
              <p>
                Sustainable development can be defined as development that meets the needs of the
                present situation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;
