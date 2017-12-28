/* COMP2015 Lab 5b */
/* Brian Liao */

const AllImages = 15;

timerID = null;

onload = function start() {

    var body = document.createElement('body');
    document.head.appendChild(body);

    var div1 = document.createElement('div');

    var div2 = document.createElement('div');
    div2.id = "0";

    var div3 = document.createElement('div');
    div3.id = "1";

    var div4 = document.createElement('div');
    div4.id = "2";

    var div5 = document.createElement('div');
    div5.id = "3";

    var div6 = document.createElement('div');
    div6.id = "end";

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
    document.body.appendChild(div5);
    document.body.appendChild(div6);

    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Image Liker by Brian Liao'));
    div1.appendChild(h1);


    var h2 = document.createElement('h2');
    h2.className = 'instructions';
    h2.appendChild(document.createTextNode('All Images'));
    div2.appendChild(h2);


    var h2 = document.createElement('h2');
    h2.className = 'instructions';
    h2.appendChild(document.createTextNode('Images I Like'));
    div3.appendChild(h2);


    var h2 = document.createElement('h2');
    h2.className = 'instructions';
    h2.appendChild(document.createTextNode('Images I Hate'));
    div4.appendChild(h2);

    var h2 = document.createElement('h2');
    h2.className = 'instructions';
    h2.appendChild(document.createTextNode('favorites of all time'));
    div5.appendChild(h2);

    var input = document.createElement('input');
    input.type = 'button';
    input.id = "resetButton";
    input.value = 'Reset'
    div6.appendChild(input);

    CreateDivs();

    function CreateDivs () {
        for (let i = 0; i <= 14; i++) {
            var img = document.createElement('img');

            img.id = "img" + i;
            img.src = "images/" + i + ".jpg";
            img.style.margin = "4px";
            img.style.width = "120px";
            img.style.height = "100px";
            img.style.border = "red solid 1px"

            div2.appendChild(img);

            img.onclick = move;

        }
    }

    function move() {
        if (this.nextSibling == null) {
            if(this.parentNode.nextSibling.id != 'end') {
                this.parentNode.nextSibling.appendChild(this);
            } else {
                this.parentNode.previousSibling.previousSibling.previousSibling.appendChild(this);
            }
        } else {
            this.parentNode.insertBefore(this.nextSibling, this);
        }
    }


    resetButton.onclick = function () {
        var img = document.getElementsByTagName('img');
        for (let i = 0; i < AllImages; i++) {
            document.getElementById("img"+ i).remove();
        }
        CreateDivs();

    }

    var LastImage = document.createElement("img");
    LastImage.src = "images/15.jpg";
    LastImage.id = "last"
    LastImage.style.width = "100px";
    LastImage.style.marginLeft = "400px";
    LastImage.style.position = "relative";
    LastImage.style.top = "20px";
    document.body.appendChild(LastImage);

    LastImage.onmouseover = function() {
        if (timerID == null) {
            timerID = setInterval("getBigger()", 100);
        } else {
            clearInterval(timerID);
            timerID = null;
        }
    }

    LastImage.onclick = function () {
        if (timerID == null) {
            timerID = setInterval("goDown()", 100);
        } else {
            clearInterval(timerID);
            timerID = null;
        }
    }
}

function getBigger() {
    var last = document.getElementById("last");

    last.style.width = parseInt(last.style.width) + 1 + "px";
    last.style.heigth = parseInt(last.style.height) + 1 + "px";
}

function goDown() {
    var last = document.getElementById("last");

    last.style.top = parseInt(last.style.top) + 1 + "px";
    console.log(last.style.top)
}