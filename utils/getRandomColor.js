const colorList = [
    "#56FFCC",
    "#66CCCC",
    "#66FFCC",
    "#9900CC",
    "#9933CC",
    "#9966CC",
    "#9999CC",
    "#99CCCC",
    "#99FFCC",
    "#CC00CC",
    "#CC33CC",
    "#CC66CC",
    "#CC99CC",
    "#CCCCCC",
    "#CCFFCC",
    "#FF00CC",
    "#FF33CC",
    "#FF66CC",
    "#FF99CC",
    "#FFCCCC",
]

var randomColor = ()=>{
    return colorList[Math.floor(Math.random() * 20)];
}

module.exports = {randomColor}