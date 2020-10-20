
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/skeletonDancing.jpg') {
      myImage.setAttribute('src','rattled.jpg');
    } else {
      myImage.setAttribute('src','skeletonDancing.jpg');
    }
}
