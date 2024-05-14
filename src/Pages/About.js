import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 text-align text-justify"  >{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Event, Company, Location, Position, Duration }) => (
            <Work
              event={Event}
              company={Company}
              location={Location}
              position={Position}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education 
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ School, Company, Location, Type, Duration }) => (
            <Work
              event={School}
              // company={Company}
              location={Location}
              position={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
