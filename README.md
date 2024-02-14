# Apatheia

# Welcome travelers

Here is our pre-base base that we've set up right before our monolith base! 

## This Web App includes; **ReactDOM** library enabling Reacts diffing algorithm that allows React to compare the actual DOM to the virtualDOM and make changes within it, The **Virtual DOM** is a concept used by React to improve performance. It is an in-memory representation of the real DOM elements that React uses for its diffing algorithm.
- It identifies the differences between the new Virtual DOM and the previous one and calculates the most efficient way to update the actual DOM, avoiding unnecessary re-renders.

## {BrowserRouter} that our lovely **React-Router-Dom** provides us with enables client-side routing meaning less page reloads
- navigating between different routes doesn't trigger a full page reload. Instead, it updates the URL and renders the relevant components without reloading the entire page.

Currently /Register && /api/pokemonPeople are incompatible with my server due to my backend not being connected. 
- Left the data in there as it remains obsolete or possibly for future reference.

Navigate through our site with our Navbar Links; Home, About, Contact and Community. You can hit the logo for the sign in form.

## In our About page lies our newly established Pokemon Center! Hit the button to see who you might catch! Maybe Ekans? or Snorlax? 

## In our Contact pages lies our support info! Please feel free to let us know what you may need, be it of any sort.

## In our Community page lies our beloved social community! Feel free to leave a message for anyone to see.

Approach; 
I had a wireframe that I was basing this idea off of. It was proceeding as planned until I realized mid-way through that I never connected to my server nor saw console.logs that notified me of mongoDB connection. Which was supposed to lead into my userAuthentication logic but I was having trouble and I let this sit for a while to start working on components/ui. 
The main/form was first of course as I want it to be so people will have to log in/ or you can browse as guest. After doing this, the submit button moves you to the home page where you may feel free to connect with us, or explore our vision.
From the home page came brainstorming what would extend this website and thus leading to our newly established Community and Pokemon center/About(will be renamed to the Pokedex Center) as social connection is crucial and motivates us. 
With the idea that we were gonna enable client side routing and our components schematics already in mind, it was smooth sailing from there as I just needed to implement logic. I love coding :)

/MainPage
http://localhost:5173/

/Home 
http://localhost:5173/home

/About
http://localhost:5173/about

/Contact
http://localhost:5173/contact

/Community
http://localhost:5173/community

Unsolved Problems; 
- Connecting to my mongoDB database, 
I realized after today's class(2/13/2024) that for this SBA I never connected my backend and frontend together so what I was doing was not working. I was trying to enable the register page to be the main page which will display a form where a user can sign in and their data would be hashed into the database. I did not realize this would be performed by a combination of front and backend so I left the backend data as is.

- Making the other Pokemon information display in About.jsx. As shown, in our About.jsx; we wanted our web to display
more Pokemon information such as; {pokemonData.evolutionChain.trigger} {pokemonData.evolutionChain.gender} {pokemonData.evolutionChain.item.name} <h2>Generation Information</h2>
        <p>Generation Name: {generationInfo.name}</p> - but I miscalculated something and the data is not being recieved from the API, to be fair though this API doesnt seem very intuitive so I grant some leeway. Other than this I am so proud to look at our creation.
  
