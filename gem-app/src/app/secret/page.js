export default function Secret() {
    return (
        <div className="testContainer d-flex justify-content-center col12">
            <video autoPlay muted loop playsInline>
                <source src='images/fleur.webm' type="video/webm" />
                <source src='images/fleur.mp4' type="video/mp4" />
            </video>
        </div>
    );
}