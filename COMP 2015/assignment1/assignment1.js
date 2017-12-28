function changes() {
    var change = document.getElementsByClassName('change');
    var allparagraph = document.getElementsByTagName('p');

    for (let i = 0; i < change.length; i++) {

        var paragraph = change[i].getElementsByTagName('p');

        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].onmouseover = function () {
                this.style.color = 'red'
            }
        }

        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].onmouseout = function () {
                this.style.color = 'black'
            }
        }
    }

    for(let i = 0; i < allparagraph.length; i++) {
        allparagraph[i].onclick = function () {
            if (this.style.border === 'thick dashed black') {
                this.style.border = 'none';
            } else {
                this.style.border = 'thick dashed black'
            }
        }
    }

    var topImg = document.getElementById('top').getElementsByTagName('img');
    var middleImg = document.getElementById('middle').getElementsByTagName('img');

    for (let i = 0; i < topImg.length; i++) {
        topImg[i].ondblclick = function () {
            this.style.display = 'none';
        }
    }

    for (let i = 0; i < middleImg.length; i++) {
        middleImg[i].ondblclick = function () {
            this.style.display = 'none';
        }
    }

    var bottomLinks = document.getElementById('bottom').getElementsByTagName('a');

    for(let i = 0; i < bottomLinks.length; i++){
        bottomLinks[i].onclick = function(){
            if(bottomLinks[i].href.includes('nhl')){
                event.preventDefault();
            }
        }
    }
}



