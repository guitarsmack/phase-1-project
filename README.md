# Class Levels

This is a one page web application that fetches information from an API and uses it to fill in the HTML page. The base API used is https://www.dnd5eapi.co/api/classes.

The purpose of this application is simply to display information on player character class abilities that are gained at each level from the main classes in the D&D 5E TTRPG.

Simply select the class to view the basic level progression of what that class has to offer.

## Events
There are 3 events from the user interactions.
### mouseover
When moving the cursor over each button it turns a nice gold color.
### mouseout
When moving the cursor out of a button, it returns to its original tan color.
### click
When clicking on a class button it will fetch the class api "levels" page as an array of objects. Objects in the array will have a "features" key and the value is another object object which has a key of "url". That location is the data that we actually need to fetch data from.  Now the data is turned into the level information that fills out the page.
### dblclick
The last even is upon double clicking the main image the page reverts to its original state in every way.

## Other information

This is somewhat of a passion project that I would like to expand on more at somepoint. But as of now it is a fully functioning site that does what it is built to do.

## Links

My blog post is not necessarily relevant to my project but as it is about fetch() the topic is relevant to the site. This is the link to it. I found diving into this topic generall helpful in completing this project. https://myschool.hashnode.dev/most-challenging-concept-of-flatiron-school-phase-1.

A link to my video walkthrough of my application is https://youtu.be/_lRTMR8KTKs

## Media

The background of the page and image container is from https://watercolors.giantsoup.com/phb/. The class images are directly from the official dndbeyond website at https://www.dndbeyond.com/.