### Author: Adepitan Prosper Similoluwa.

# PLACES-YOU'VE-BEEN.

## Description OF Program.

This program is **a book or a database used for storing entries i.e places you've visited.**. Each entry usually consists of a few standard fields (for example: location, landmark, period, notes). It allows users to store details of their travels and tours.

## PROGRAM SETUP INSTRUCTIONS && TEST DRIVEN DEVELOPMENTS {TDD}.

### SETUP:

- Use index.html for home page.
- Used css to style pages (custom styles.css as well as bootstrap).
- Sent valid commits regularly through Github.
- I used javascript to make the page interactive (custom javascript and Jquery)
- And i finally used VS code edittor to add a READme.

### TEST DRIVEN DEVELOPMENTS {TDD}:


-----> Describe: Visited()

* Test: It is a constructive function, it takes the visit details and stores them as an object.

* Code: let newTour = new Visited("location", "landmark", "season", "notes");  console.log(newTour);

* Expected Output: Visited {location: "location", landmark: "landmark", period: "period", notes: "notes"}

-----> Describe Visited.prototype.location()

* Test: It is a prototypal function under the Visited Constructor which takes the tour location and returns it.

* Code: newTour.location();

* Expected Output: "location"


-----> Describe: PlacesVisited()

* Description: This is a constructive function which stores all Visited in an object, in this case it was used to mock a database it behaves similarly as a database would. It has just two parameters in it({visits = {}; currentId = 0;}).  It has prototypal functions assigned to it(addVisit, assignId, findVisit, deleteVisit) which would be used to add a visit, assign id to a particular visit, find a visit, and delete a visit respectively.

## COPYRIGHT AND LICENSE INFORMATION.

Subject to the terms and conditions of this agreement, _i hereby grant_ in exchange for goods and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, to any personnel who has completed the fundamentals of coding worldwide, and the trade secret license to reproduce, adapt, translate, modify, and prepare derivative works of publicly display.