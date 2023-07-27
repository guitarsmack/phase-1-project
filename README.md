This is a one page web application that fetches information from an API and uses it to fill in the HTML page. The base API used is https://www.dnd5eapi.co/api/classes.

The purpose of this application is simply to display information on player character class abilities that are gained at each level from the main classes in the D&D 5E TTRPG.

Simply select the class to view the basic level progression of the what that class has to offer.

When clicking on a class button it will fetch the class api levels as an array of objects, the objects in the array being each level Inside each level is a feature object that has a key of "url" and a value of the url location which actually reveals the abilitiy information. Once at the destination of the ability the information is taken from that to fill out the page with all of the information.

Somewhat of a passion project as I would like to expand this at somepoint to be more encompassing and have more information.

The background is from https://watercolors.giantsoup.com/phb/ and the class images are directly from the official dndbeyond website at https://www.dndbeyond.com/.