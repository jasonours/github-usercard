/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/jasonours')
// .then (response => {
//   console.log(response)
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(user) {
  const cards = document.createElement('div')
  const images = document.createElement('img')
  const cardInfo = document.createElement('div')
  const names = document.createElement('h3')
  const usernames = document.createElement('p')
  const locations = document.createElement('p')
  const profiles = document.createElement('p')
  const anchors = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  cards.classList.add('card')
  images.src = user.images_url
  cardInfo = classList.add('card-info')
  names = classList.add('name')
  names.textContent = users.name
  usernames = classList.add('username')
  locations.textContent = 'Location:' + users.location
  profiles.textContent = 'Profile:'
  anchors.href = user.html_url
  followers.textContent = 'Followers:' + user.followers
  following.textContent = 'Following:' + user.following
  bio.textContent = 'Bio:' + user.bio

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
