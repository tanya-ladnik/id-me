
const formatPrice = (value) => {
    let num = value.toString().split("");
    num.splice(num.length-2,0,".")
    return `$${num.join("")}`
}
    
export default formatPrice;