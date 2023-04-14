import React from "react";
import LearnMoreCard from "./LearnMoreCard";

const LearnMore = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-52 pb-52">
      <h1 className="text-center text-3xl font-bold">Recommended Reading</h1>
      <p className="text-center text-lg mt-4">
        Learn more about Cosmic Chill.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <LearnMoreCard
          title="Card Title 1"
          image="https://dummyimage.com/720x400"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere libero et justo sodales, ut congue neque hendrerit."
          learnMoreText="Learn more 1"
        />
        <LearnMoreCard
          title="Card Title 2"
          image="https://dummyimage.com/720x400"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere libero et justo sodales, ut congue neque hendrerit."
          learnMoreText="Learn more 2"
        />
        <LearnMoreCard
          title="Card Title 3"
          image="https://dummyimage.com/720x400"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere libero et justo sodales, ut congue neque hendrerit."
          learnMoreText="Learn more 3"
        />
      </div>
    </div>
  );
};

export default LearnMore;
