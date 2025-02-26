import React from "react";

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Project: React.FC<ProjectData> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title}/>
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a
          href={projectUrl}
          className="btn btn-primary mt-auto"
          target="_blank"
          style={{ backgroundColor: '#b2b09bff', color: '#254441ff', border: '#254441ff'}}
        >
          Go to Github Repo
        </a>
      </div>
    </div>
  );
};

export default Project;