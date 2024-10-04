import Link from "next/link";

export default function Casting() {
    return (
      <main>
        <div className="castingCont text-center mt-4 col-md-6 mx-auto"> 
          <h1 id="castingH1">Custom Resin Casting</h1>
          
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is resin casting?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Resin casting is a process in which objects, such as flowers, are encased in clear resin in order to preserve their appearance and details over time.</strong> For floral preservation, the bouquet is decontructed and carefully dried to maintain its beauty. Resin is then poured around the dried flowers in layers, creating a smooth, durable block that captures the sentimental value of the bouquet.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How much does it cost?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>The size of the cast and depth required to encase the flowers determine the final price.</strong> You can use my <u><Link href="/castingcalc">project calculator</Link></u> to get an idea of what it might cost. Please note that this is not a final quote, and prices may vary depending on the complexity of the project. An official quote will be provided after discussing your project in detail.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How do I order?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>I would love to bring your project to life!</strong> To get the process started, please fill out my <u><Link href={"/orderform"}>project inquiry form</Link></u> or email me at mariah@gemineyeofthetiger.com with your project details. I will reach out to you to discuss the logistics and provide a quote. Once we have agreed on the details, I will send you an invoice for the project. After your deposit and flowers are received, I will begin the casting process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }