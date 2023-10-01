import { useState } from "react";

const Section = ({ title, describtion, isVisible, setIsVisible }) => {
  return (
    <div className="ista-div">
      <h2>{title}</h2>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{describtion}</p>}
    </div>
  );
};

const Istamart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  return (
    <div>
      <h1>Instmart</h1>

      <Section
        title={"About InstaMart"}
        describtion={
          "Swiggy has been synonymous with the on-demand delivery of food from your favorite restaurants. Launched in August 2020, Swiggy Instamart was an extension of Swiggy’s mission to enable unparalleled convenience, just the way we have with food. Swiggy Instamart was born in the middle of the pandemic, in August 2020 and has led the way in creating this category in the country. Today, Instamart is present in 28 cities and counting.  "
        }
        isVisible={sectionVisible === "about"}
        setIsVisible={() => {
          setSectionVisible("about");
        }}
      />

      <Section
        title={"Team InstaMart"}
        describtion={
          "We’re able to deliver fast because of the amazing tech and logistics play at work. There are primarily two parts to this process – pick/pack time and delivery. Technology plays a key role in making the pick+pack process efficient – ranging from the placement of items within the store to optimal routes for store personnel. On the delivery side, we leverage location intelligence to strategically place the network of seller-managed dark stores closer to the customer based on the demand density. The delivery executives are unaware of the delivery promise made to the customer (which in itself is a range), they are also not penalized nor incentivised based on the delivery time. "
        }
        isVisible={sectionVisible === "team"}
        setIsVisible={() => {
          setSectionVisible("team");
        }}
      />
    </div>
  );
};

export default Istamart;
