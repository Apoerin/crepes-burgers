import React from 'react';
import { useEffect, useState } from "react";
//import { Parallax } from "react-parallax";

import burger_parallax from '../images/burger_parallax.jpg';
import burger_preview from '../images/burger_preview.jpg';
import salmon_crepe from '../images/salmon_crepe.jpg';
import for_seasonal from '../images/for_seasonal.jpg';

function About() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

                        /*<Parallax
                bgImage={burger_parallax}
                strength={500}
                className="intro">
                <div className="headline">This is your burger</div>
            </Parallax>
    */

    return (
        <>
            <section className="intro">
                <img
                    src={burger_parallax}
                    alt="burger"
                    className="parallax"
                    style={{
                        filter: `blur(1px)`,
                        transform: `translateY(${offset * 0.5}px)`
                    }}
                />
                <div className="text-wrapper">
                    <h2 className="headline">this is your burger</h2>
                </div>
            </section>
            <section className="details">
                <h3>Enjoy every bite</h3>
                    <div className="wrapper">
                        <div className="img-wrapper">
                            <img src={burger_preview} className="preview" alt="burger"/>
                        </div>
                        <div className="details-text">
                            <h4>Juicy burgers with best local meat</h4>
                            <p>The best meat in city! Our burgers are made with 100% bio beef, roasted on grill
                                to let you enjoy a natural taste of fine meat. Also with rich bacon and high quality
                            cheese to give you new experience.</p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="details-text">
                            <h4>Fresh herbs, vegetables and fruits</h4>
                            <p>We use only fresh veggies, fruits and herbs. We support small local businesses by buying
                            their goods. And so, we have 100% Bio, eco grown ingredients for your health.</p>
                        </div>
                        <div className="img-wrapper">
                            <img src={for_seasonal} className="preview" alt="herbs"/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="img-wrapper">
                            <img src={salmon_crepe} className="preview" alt="salmon-crepe"/>
                        </div>
                        <div className="details-text">
                            <h4>Tasty fish for our crepes</h4>
                            <p>Rich in fats, tasty salmon for our most likeable crepe! Alongside with creamy avocado it makes
                            perfect duet to fulfill your need of freshness.</p>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default About;
