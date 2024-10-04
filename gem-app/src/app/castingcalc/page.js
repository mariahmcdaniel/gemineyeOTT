"use client"
import priceCalc from "./price-calc";
import React, { useState } from "react";


export default function CastingForm() {
    const [length, setLength] = useState(7);
    const [width, setWidth] = useState(7);
    const [depth, setDepth] = useState(3);
    const [isUsingFlowers, setIsUsingFlowers] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        if (length === "" || width === "" || depth === "") {
            setErrorMessage("Please fill in all dimensions.");
            return;
        }

        const totalPrice = priceCalc(length, width, depth, isUsingFlowers);
        setResult(totalPrice);
    };

    return (
        <div className="castingContainer row d-flex align-items-center">
            <h3>Project Estimate
            </h3>
            <div id="questionsContainer">
                <div className="form-group row">
                    <label htmlFor="lengthInput">Length:</label>
                    <input
                        type="number"
                        className="calcInput"
                        id="lengthInput"
                        name="lengthInput"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        min="1"
                        max="9.5"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="widthInput">Width:</label>
                    <input
                        type="number"
                        className="calcInput"
                        id="widthInput"
                        name="widthInput"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        min="1"
                        max="9.5"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="depthInput">Depth:</label>
                    <input
                        type="number"
                        className="calcInput"
                        id="depthInput"
                        name="depthInput"
                        value={depth}
                        onChange={(e) => setDepth(e.target.value)}
                        min="1"
                        max="5"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="flowersCheckbox">Using fresh flowers:</label>
                    <input
                        type="checkbox"
                        id="flowersCheckbox"
                        name="flowersCheckbox"
                        checked={isUsingFlowers}
                        onChange={() => setIsUsingFlowers(!isUsingFlowers)}
                    />
                </div>
                <button id="calculate" onClick={handleCalculate}>
                    Calculate
                </button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {result && <h2>Result: <span id="result">{result}</span></h2>}
            </div>
        </div>
    );
}