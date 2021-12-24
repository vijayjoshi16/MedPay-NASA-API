<h1 align="center">MedPay NASA API Assignment</h1>

<p>This React.js website uses the NASA API to get information about the near-earth asteroids. All the data is from the NASA JPL Asteroid website https://neo.jpl.nasa.gov/ </p>

<p>Deployed Website Link: https://medpay-nasa-api.netlify.app/

### How to setup this project in your local machine?

- Clone this project: 
`git clone https://github.com/vijayjoshi16/MedPay-NASA-API.git`

- Change the current working directory:
`cd MedPay-NASA-API`

- Create a .env file

- Go to the NASA Open API website and get your developer API key from here https://api.nasa.gov/ or use their demo api key which is `DEMO_KEY`

- Paste the API key in the .env file as follows: `REACT_APP_API_KEY=YOUR_API_KEY_HERE`

- Install all the required packages
`npm install`

- Start the react app
`npm start`
  
## Features include:
  
- Responsive Navbar to navigate to different parts of the website

- Front Banner Component which shows the first impression of the website
  
- About section which tells the user about the features of the website
  
- Asteroid Component to display a list of 10 default asteroids
  
- Datewise Asteroid Component to display asteroids based on the start and end dates
  
- Search Component to search for asteroids based on ID
  
- Asteroid Card to display basic asteroid details in a Card View
  
- DetailedCard to display detailed information about an asteroid
  
- Footer to give proper attributions to the image and logo providers
