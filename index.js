var places = [
    ['zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
    ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
    ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    ['Hundred', 'Thousand', 'Lakh']
];

function getword() {

    var display = document.getElementById("display");
    display.classList.add("p-3");
    display.classList.add("mb-2");
    display.classList.add("bg-dark");
    display.classList.add("text-white");

    var num = document.getElementById("number").value;
    // var num = 0;
    console.log(num);
    var arr = num.toString().split("");
    var intArr = arr.map((item) => { return parseInt(item); })
        // console.log(intArr);
    switch (intArr.length) {
        case 0:
            console.log(places[0][0] + " only");
            break;
        case 1:
            var str = "";
            str += ones(intArr[0]);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 2:
            var str = "";
            var temp1 = intArr;
            str += tens(temp1);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 3:
            var str = "";
            str += hundreds(intArr);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 4:
            var str = "";
            str += sthousand(intArr);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 5:
            var str = "";
            str += tthousand(intArr);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 6:
            var str = "";
            str += slakh(intArr);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;
        case 7:
            var str = "";
            str += tlakh(intArr);
            str += " only";
            console.log(str);
            display.innerHTML = str;
            break;

    }


}

function ones(intArr) {
    return (places[0][intArr]);
}

function tens(intArr) {
    if (intArr[0] == 1) {
        return (places[intArr[0]][intArr[1]]);
    } else if (intArr[0] == 0) {
        return (places[intArr[0]][intArr[1]]);

    } else {
        if (intArr[1] == 0) {
            return (places[2][intArr[0] - 2]);
        } else {
            return (places[2][intArr[0] - 2] + " " + places[0][intArr[1]]);
        }

    }
}

function hundreds(intArr) {
    var str = "";
    var n1 = intArr[0];
    var temp2 = intArr.slice(1, intArr.length)
        // var temp2 = [];
        // temp2.push(intArr[1]);
        // temp2.push(intArr[2]);
    if (n1 == 0) {
        str += tens(temp2);
        str += " " + (places[3][0]) + " and";

    } else {
        str += ones(n1);
        str += " " + (places[3][0]) + " and";
        str += " " + tens(temp2);
    }
    return str;
}

function sthousand(intArr) {
    var str = "";
    var temp3 = intArr.slice(1, intArr.length);
    if (intArr[0] == 0) {
        str += hundreds(temp3);
    } else {
        str += ones(intArr[0]);
        str += " " + places[3][1] + " ";
        str += " " + hundreds(temp3);

    }
    return str;

}

function tthousand(intArr) {
    var str = "";

    if (intArr[0] == 0) {
        var temp = intArr.slice(1, intArr.length);
        str += sthousand(temp);
    } else {
        var temp3 = intArr.slice(0, 2)
        var temp = intArr.slice(2, intArr.length);

        str += tens(temp3);
        str += " " + places[3][1] + " ";
        str += " " + hundreds(temp);

    }
    return str;
}

function slakh(intArr) {
    var str = "";
    var temp = intArr.slice(1, intArr.length);
    if (intArr[0] == 0) {
        str += tthousand(temp);
    } else {
        str += ones(intArr[0]);
        str += " " + places[3][2] + " ";
        str += " " + tthousand(temp);

    }
    return str;
}

function tlakh(intArr) {
    var str = "";
    if (intArr[0] == 0) {
        var temp = intArr.slice(1, intArr.length);
        str += slakh(temp);
    } else {
        var temp3 = intArr.slice(0, 2)
        var temp = intArr.slice(2, intArr.length);

        str += tens(temp3);
        str += " " + places[3][2] + " ";
        str += " " + tthousand(temp);

    }
    return str;
}