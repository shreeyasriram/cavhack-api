# Profile API Documentation

**GET /profiles**
* Get all profile information including
  * First Name
  * Last Name
  * Bio
  * Picture URL
  * Interests
  * Skills

**GET /profiles/id**
* Get profile information for one person based on the id

**POST /profile/id**
* Add a new profile
* Don't have to add all the fields

**PUT /profile/id**
* Update a profile

**DELETE /profile/id**
* Delete a profile

**GET /interests/id**
* Get an array of interests based on the ID of the profile

Notes: Depending on if the students added other routes to their API they may also be have more routes to hit but the above were provided in the API Session.