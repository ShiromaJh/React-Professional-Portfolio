import React from "react";
import MF from "../components/mf.png";
import SKB from "../components/skb.jpg";
import BSE from "../components/bse.jpg";
import CHAR from "../components/character.jpg";

function Projects() {
  return (
    <div className="projects">
      <div className="py-5">
        <div className="container"></div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <img className="img-project" src={MF} alt="mf..."></img>
              <h3>Movie Fusion</h3>
              <h6> Modern Web App that fetches information on movies and TV shows</h6>
              <a href="https://github.com/ShiromaJh/Movie-Fusion" className="btn-main">
                Repo
              </a>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <img className="img-project" src={SKB} alt="skb..."></img>
              <h3>SKB</h3>
              <h6> M.E.R.N Stack Kanban constructor</h6>
              <a href="https://github.com/ShiromaJh/SKB" className="btn-main">
                Repo
              </a>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <img className="img-project-bse" src={BSE} alt="bse..."></img>
              <h3>Book Search Engine</h3>
              <h6> React.JS app designed for searching and saving your favorite books</h6>
              <a href="https://github.com/ShiromaJh/Book-Search-Enginev2.0" className="btn-main">
                Repo
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <img className="img-project-bse" src={CHAR} alt="bse..."></img>
              <h3>Characterholic</h3>
              <h6>Character creation app for DnD</h6>
              <a href="https://github.com/dylgrn/Chacterholic" className="btn-main">
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
