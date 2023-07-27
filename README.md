This is a one page web application that fetches information from an API and uses it to fill in the HTML page.

The purpose of this application is simply to display information on player character class abilities that are gained at each level from the main classes in the D&D 5E TTRPG.

Simply select the class to view the basic level progression of the what that class has to offer.

When clicking on a class button it will fetch the class api level progression as an array of objects, the objects bein each level in the array. Inside each level object are features that have a value for the url that actually reveals the abilities of the level. Once at the destination of the ability the information is taken from that to fill out the page with all of the information.



The background is from https://watercolors.giantsoup.com/phb/ and the class images are directly from the official dndbeyond website at https://www.dndbeyond.com/