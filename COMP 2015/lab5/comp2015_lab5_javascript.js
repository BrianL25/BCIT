/* COMP2015 Lab 5a */
/* Brian Liao */

const AllImages = 15;

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
    div4.id = "end";

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
    document.body.appendChild(div5);

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

    var input = document.createElement('input');
    input.type = 'button';
    input.id = "resetButton";
    input.value = 'Reset'
    div5.appendChild(input);

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
            if(this.parentNode.id != 'end') {
                this.parentNode.nextSibling.appendChild(this);
            } else {
                this.parentNode.previousSibling.previousSibling.appendChild(this);
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

}