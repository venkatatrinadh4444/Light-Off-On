 function switchOff() {
    document.getElementById('content').textContent="Switched Off"
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('offBtn').style.backgroundColor="green"
     document.getElementById('onBtn').style.backgroundColor="red";
    

}
function switchOn() {
    document.getElementById('content').textContent="Switched On"
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"

    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('onBtn').style.backgroundColor="green"
     document.getElementById('offBtn').style.backgroundColor="red";
}