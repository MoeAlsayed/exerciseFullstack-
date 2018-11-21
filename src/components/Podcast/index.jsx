
import React from "react";
import "./index.scss";
import { Button } from 'reactstrap'
import PodcastGuest from "./PodcastGuest";

const PodcastItem = props => {
  return (
    <article className="row podcast mb-5">
      <div className="col-3">
        <div className="border p-2">
          <div className="image-wrapper">
            <div className="image-number">
              {props.number > 9 ? props.number : "0" + props.number}.
            </div>
            <img src="/undraw_moment_to_remember_02gj.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="col-9">
        <span className="overline">
          episode #{props.number > 9 ? props.number : "0" + props.number}
        </span>

        <p>{props.children}</p>

        <PodcastGuest guest={props.guest} guestimg={props.guestimg}/>

        <Button className="outline inverted thin my-4 small">Listen on Soundcloud</Button>

        <div>
          <a href="">or jump to iTunes</a>
        </div>

      </div>
    </article>
  );
};

export default PodcastItem;