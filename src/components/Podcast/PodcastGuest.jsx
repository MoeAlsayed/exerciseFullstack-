import React from "react";

const PodcastGuest = props => {
  return (
    <div className="row guest align-items-center">
      <div>
        <div className="border p-2 guest-wrapper">
          <div className="image-wrapper">
            <img src="/undraw_profile_pic_ic5t.svg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <span>Guest: </span>
        {props.guest} from <a href="">Eduweb</a>
      </div>
    </div>
  );
};

export default PodcastGuest;