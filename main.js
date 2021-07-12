var names_of_people = [];
function submit(){
    var guest_name = document.getElementById("Name1").value;
    names_of_people.push(guest_name);
    console.log(names_of_people);
    var lenght = names_of_people.length;
    console.log(lenght);
    document.getElementById("display_name").innerHTML = names_of_people.toString();
}

function Sort() {
    names_of_people.sort();
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("sorted").innerHTML = i.toString();
}

function Show() {
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display = "block";
}

function Searching() {
    var s = document.getElementById("S1").value;
    var found = 0;
    var j;
    for(j = 0; j < names_of_people.length; j++)
    {
        if(s == names_of_people[j]){
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name_found" + found + "times";
    console.log("found_name" + found + "times");
}
