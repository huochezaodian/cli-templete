var itemArr = document.querySelectorAll('.item');
for (let i = 0; i < itemArr.length; i++) {
  itemArr[i].ontouchstart = function(){
    this.style.background = '#f7f7f7';
  }
  itemArr[i].ontouchend = function(){
    this.style.background = '#fff';
  }
}
var downloadArr = document.querySelectorAll('.download');
for (let i = 0; i < downloadArr.length; i++) {
  downloadArr[i].onclick = function(){
    let parentNode = this.parentNode;
    let preNode = this;
    let newNode = document.createElement('img');
    newNode.style.width = '35px';
    newNode.style.height = '35px';
    newNode.src = './img/download.svg?' + new Date().getTime();
    this.remove();
    parentNode.appendChild(newNode);
    setTimeout(function(){
      newNode.remove();
      parentNode.appendChild(preNode);
    }.bind(this),1000);
  }
}
downloadArr[0].click();
