var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];







function datatable() {

    event.preventDefault();

    var x = 1;
    var i = 0;
    var datarow = document.getElementById('data');
    var newrow = datarow.insertRow(x);

    

    list1[i] = document.getElementById("fname").value;
    list2[i] = document.getElementById("lname").value;
    list3[i] = document.getElementById("gender").value;
    list4[i] = document.getElementById("address").value;
    list5[i] = document.getElementById("pin").value;
    list6[i] = document.getElementById("state").value;
    list7[i] = document.getElementById("cont").value;
    list8[i] = document.getElementById("food").value;
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);
    cell1.innerHTML = list1[i];
    cell2.innerHTML = list2[i];
    cell3.innerHTML = list3[i];
    cell4.innerHTML = list4[i];
    cell5.innerHTML = list5[i];
    cell6.innerHTML = list6[i];
    cell7.innerHTML = list7[i];
    cell8.innerHTML = list8[i];
    

    x++;
    i++;

}