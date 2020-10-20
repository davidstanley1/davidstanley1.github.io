
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/skeletonDancing.jpg') {
      myImage.setAttribute('src','images/rattled.jpg');
    } else {
      myImage.setAttribute('src','images/skeletonDancing.jpg');
    }
}
