import priceCalc from "./price-calc";

export default function Casting() {
    return (
        <div className="container d-flex justify-content-center row">
            <video autoPlay muted loop playsInline>
                <source src="images/fleur.webm" type="video/webm" />
                <source src="images/fleur.mp4" type="video/mp4" />
            </video>
        </div>
    );
}