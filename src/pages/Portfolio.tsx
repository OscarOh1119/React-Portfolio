import React from "react";
import Project from "../components/Project";

const Portfolio: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">Projects:</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 d-flex">
          <Project
            title="TV Czar"
            description="TV Czar is an application I built with my team to keep track of all the shows we watch as well as recommend them to the public"
            imageUrl="public\TVCzar.PNG"
            projectUrl="https://github.com/OscarOh1119/project1-repo"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex">
          <Project
            title="Lift Lab"
            description="Lift Lab is an application that allows the user to search exercises from a database and add their own"
            imageUrl="public\Liftlab.PNG"
            projectUrl="https://github.com/marielmetalios/liftlab"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex">
          <Project
            title="README generator"
            description="Allows the user to input basic text and transform it to markup for a README"
            imageUrl="public\README.PNG"
            projectUrl="https://github.com/OscarOh1119/READMEgenerator"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;