const priceCalc = (length, width, depth, isUsingFlowers) => {
    const totalVolume = length * width * depth;
    const resinPrice = totalVolume * 2.5;
    
    let laborPrice = 100;
    if (totalVolume >= 80) laborPrice += 100;
    if (totalVolume >= 160) laborPrice += 100;
    if (totalVolume >= 240) laborPrice += 100;
    if (totalVolume >= 320) laborPrice += 200;

    let totalPrice = resinPrice + laborPrice;
    
    if (isUsingFlowers) totalPrice += 100;
    
    return totalPrice;
}

export default priceCalc;
