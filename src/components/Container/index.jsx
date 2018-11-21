
import React from "react";
import "./index.scss";

const Container = props => {
  return (
    <section className="container">
      <div className="content">
        <span className="overline">For who and why?</span>

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta quo sunt, quos aperiam mollitia sint ab pariatur eum adipisci? This is created by <a href="">Simon Halimonov</a>.</h2>
        <hr/>
        {props.children}
      </div>
    </section>
  );
};

export default Container;