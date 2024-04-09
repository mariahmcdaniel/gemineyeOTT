const priceCalc = (length, width, depth) => {
    const totalVolume = length * width * depth;
    console.log(totalVolume);
    const resinPrice = totalVolume * 2.5;
    console.log(resinPrice);
    let laborPrice = 100;
    if (totalVolume >= 150){
        laborPrice += 150 
    };
    console.log(laborPrice);
    if (totalVolume >= 300){
        laborPrice += 100
    };
    console.log(laborPrice); 
    if (totalVolume > 300){ 
        laborPrice += 150
    };
    let totalPrice = resinPrice + laborPrice;
    return totalPrice
}
    export default priceCalc;