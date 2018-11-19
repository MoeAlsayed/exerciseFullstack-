import React from 'react';
import './index.scss'
const Container = props => {
    return (
        <section className='container'>
            <div className="content">
                <span className='overline'>For who and why?</span>

                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt quisquam consequuntur a fugit cum, error voluptatibus possimus reprehenderit atque sint ut at mollitia ea! Totam temporibus libero eum distinctio. This is createed by <a href="/">Simon & Mohamad</a></h2>

                <hr />
                {props.children}
            </div>
        </section>
    )
}

export default Container