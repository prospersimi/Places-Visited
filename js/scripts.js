// Business logic for placesvisited -----
function PlacesVisited() {
    this.visits = {};
    this.currentId = 0;
}

PlacesVisited.prototype.addVisit = function (visited) {
    visited.id = this.assignId();
    this.visits[visited.id] = visited;
};

PlacesVisited.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

PlacesVisited.prototype.findVisit = function (id) {
    if (this.visits[id] != undefined) {
        return this.visits[id];
    }
    return false;
};

PlacesVisited.prototype.deleteVisit = function (id) {
    if (this.visits[id] === undefined) {
        return false;
    }
    delete this.visits[id];
    return true;
};


// Business logic for visited ---------
function Visited(location, landmark, period, notes) {
    this.location = location;
    this.landmark = landmark;
    this.period = period;
    this.notes = notes;
}

Visited.prototype.location = function () {
    return this.location;
};


//User Interface Logic ----------
let placesVisited = new PlacesVisited();

function displayVisitDetails(placeVisitedToDisplay) {
    let visitLocation = $("ul#visits");
    let htmlForVisitInfo = "";
    Object.keys(placeVisitedToDisplay.visits).forEach(function (key) {
        const visit = placeVisitedToDisplay.findVisit(key);
        htmlForVisitInfo += "<br>" + "<li id=" + visit.id + ">" + visit.location + "</li>"
    });
    visitLocation.html(htmlForVisitInfo);
}

function showVisit(visitId) {
    const visit = placesVisited.findVisit(visitId);
    $("#show-visit").show();
    $(".location").html(visit.location);
    $(".landmark").html(visit.landmark);
    $(".period").html(visit.period);
    $(".notes").html(visit.notes);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='btn-primary' id='save'>Ok</button> <button class='btn-danger' id=" + visit.id + ">Delete</button>");
}

function attachEventListeners() {
    $("ul#visits").on("click", "li", function () {
        showVisit(this.id);
    });

    $("#buttons").on("click", ".btn-primary", function () {
        placesVisited.deleteVisit(this.id);
        $("#show-visit").hide();
        displayVisitDetails(placesVisited);
    })

    $("#buttons").on("click", ".btn-danger", function () {
        placesVisited.deleteVisit(this.id);
        $("#show-visit").hide();
        displayVisitDetails(placesVisited);
    })
}

$(document).ready(function () {
    attachEventListeners();
    $("form#new-visit").submit(function (event) {
        event.preventDefault();
        const inputtedLocation = $("input#new-location").val();
        const inputtedLandMark = $("input#new-landmark").val();
        const inputtedPeriod = $("input#new-period").val();
        const inputtedNotes = $("input#new-notes").val();

        $("input#new-location").val("");
        $("input#new-landmark").val("");
        $("input#new-period").val("");
        $("input#new-notes").val("");

        let newVisited = new Visited(inputtedLocation, inputtedLandMark, inputtedPeriod, inputtedNotes);
        placesVisited.addVisit(newVisited);
        displayVisitDetails(placesVisited);
    });
});

$(document).ready(function () {
    $("#new").click(function (event) {
        event.preventDefault();
        $("#secondcol").toggle();
    })
}) 