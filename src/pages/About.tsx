import React from "react";

const About: React.FC = () => {
  return (
    <section className="container my-5 pb-5">
      <div className="row">
      <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <div className="lead">
            <p>Hello my name is Oscar Oh
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src="/OOH.PNG"
            alt="pic"
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  );
};

export default About;