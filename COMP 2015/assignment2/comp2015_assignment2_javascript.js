/* Assignment 2 */
/* Brian Liao */

var count = 0;
timerID = null;

function move(){

    var imgG = document.getElementById("tiger");

    imgG.style.left = parseInt(imgG.style.left) + 1 + "px";
}

function moveFaster(){

    var imgH = document.getElementById("monkey");

    imgH.style.left = parseInt(imgH.style.left) + 1 + "px";
}

function change() {

    if (count !== 0) {
        return false;

    } else {
        var imgA = document.createElement("img");
        var imgB = document.createElement("img");
        var imgC = document.createElement("img");
        var imgD = document.createElement("img");
        var imgE = document.createElement("img");
        var imgG = document.createElement("img");
        var imgH = document.createElement("img");

        var img = document.getElementsByTagName("img");

        var txt = document.createElement("p");

        var p = document.createTextNode("Click Here");

        txt.appendChild(p);

        imgA.src = "images/dog.jpg";
        imgB.src = "images/cat.jpg";
        imgC.src = "images/fish.jpg";
        imgD.src = "images/turtle.jpg";
        imgE.src = "images/zebra.jpg";
        imgG.src = "images/tiger.jpg";
        imgH.src = "images/monkey.jpg";

        imgG.id = "tiger";
        imgG.style.left = "10px";
        imgG.style.marginTop = "20px";
        imgG.style.position = "absolute";

        imgH.id = "monkey";
        imgH.style.left = "10px";
        imgH.style.marginTop = "120px";
        imgH.style.position = "absolute";

        var button = document.createElement("button");
        button.id = "click";

        document.getElementById("firstDiv").appendChild(imgA);
        document.getElementById("firstDiv").appendChild(imgB);
        document.getElementById("firstDiv").appendChild(imgC);
        document.getElementById("firstDiv").appendChild(imgD);
        document.getElementById("firstDiv").appendChild(imgE);

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(button);

        document.getElementById("click").appendChild(txt);

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(imgG);

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(imgH);

        count++;

    }

    for (let i = 0; i < img.length; i++) {
        if (i <= 4) {
            img[i].onclick = moveFirst;
        }
    }

    imgG.ondblclick=function() {
        if (timerID == null) {
            timerID = setInterval("move()", 20);

        } else {
            clearInterval(timerID);
            timerID = null;
        }
    };

    imgH.ondblclick=function() {
        if (timerID == null) {
            timerID = setInterval("moveFaster()", 10);

        } else {
            clearInterval(timerID);
            timerID = null;
        }
    };

    function moveFirst() {
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    };

    $("button").click(function(){
        $("img").css("border", "1px solid red");
    });

}