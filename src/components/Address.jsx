import * as  React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

export default function Address() {
    const { ref } = useGoogleMaps(
        "AIzaSyD0yDBj2-SR97wS1cxBZ3KOaC-cevCVR7s",
        {
            center: { lat: 52.236710, lng: 21.017521 },
            zoom: 14
        });
    return (
        <>
            <section className="address" id="address">
                <h3>your food is waiting for you!</h3>
                <div ref={ref} className="ref"> </div>
                <div className="info-wrapper">
                    <div>
                        <h4>Address</h4>
                        <p>End Town Str. 5, Somewhere in Europe
                        <br />
                        crepes&burgers@gmail.com
                        <br />
                        +8 (345) 456 789
                    </p>
                    </div>
                    <div>
                        <h4>We Are Open</h4>
                        <p>
                            Monday - Friday: 11:00 - 20:00
                        <br />
                        Saturday - Sunday: 11:00 - 18:00
                    </p>
                    </div>
                </div>
            </section>
        </>
    );
}
