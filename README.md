![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 
# Venture - September 18, 2021
##### A trip planning tool built with covid-19 safety in mind 
<p align="center">
  <img src="https://user-images.githubusercontent.com/44274876/133885136-455daf52-f682-4eb3-98a0-b4d00ff80e8f.png" alt='Venture guideline show info'>
 </p>


### &#x1F534; Introduction
Just after international travel began to reopen, the delta varient resulted in an uptick of covid cases. While many US residents were looking forward to their first big adventure in months, circumstances became more adverse. Venture was designed to help users plan trips to foreign countries, amidst volitile swings in infections abroad. Venture integrates API's to do due dillegennce on behalf of travelers. ___Check it out:___ *first* [*launch the backend*](https://young-ocean-54995.herokuapp.com/trips/)*; wait a moment, then in a new tab visit the* [*Venture app!*](https://adverse-venture.herokuapp.com/)
### &#x1F534; Description
**General Approach:** Very early on, within the first few hours of working with DRM, its sheer capacity blew me away.  As I began brainstorming capstone ideas, I took a two-pronged approach.  I needed an idea that was relevant to our current events / culture. Something that served a purpose and solved a fresh problem. My secondary focus was directed towards discovering how I could implement previous solutions developed in my immersive program at [General Assembly](https://generalassemb.ly/). A bit of a stretch, but certainly motivational!

Building a trip planner was the foundation for my capstone. It's personally relevant and that gave me enough momentum to come across the TravelPerk Suite.  It integrates with carbon offsetting (e.g. [EAH](https://github.com/trevor4n/ENV-Advocacy#environmental-advocacy-hub-eah----bite-sized-environmental-data-%EF%B8%8F)), covid culture, and currencies (financial features in active development).  My goal is to integrate all three aspects encompassed under *one* umbrella project within *one* month of my graduation!


**Concepts Applied:** Venture is a full-stack application created with a DRM (Django REST Framework) backend acting as an internal API that's consumed by a ReactJS frontend!
- (M) Mongo interfaces hyperlinked, serialized, and easily migratable ORM models/querysets capable of many-to-many relations
- (V) Mongo class based views provide an authenticated web browsable api for view routes
- (C) Mongo acts as a controller accepting url requests, which it validates and maps to views
- (T) React component encapsulation patterns keep templates and forms dry yet flexible
- (F) Monngo function based views faciliitate proxied requests to external web APIs


### &#x1F534; Technologies used
 - DRM (Django REST Framework)
 - psycopg2 (PostgreSQL)
 - ReactJS
 - ReactBootstrap
 - [TravelPerk API](https://www.travelperk.com/)


### &#x1F534; Installation instructions
 - [ ] Clone this repository & the [venture backend](https://github.com/trevor4n/venture_backend)
 - [ ] Navigate to the backend project directory w/in your terminal
 - [ ] `$ pipenv shell`
 - [ ] `$ python manage.py runserver`
 - [ ] In a separate terminal instance, navigate to the frontend project directory
 - [ ] `$ npm start`

 ### 🚧 major hurdles
 - [X] First-time setup of DRM proxy requests took longer than anticipated due to hangups with TravelPerk's API
 - [ ] I'm looking forward to full api clearance from TravelPerk for *restrictions* and *airline_safety_measures* endpoints
 - [ ] DRM Token Authentication (full crud) is still under development



### &#x1F535; Major Wins
- Tackles a concrete issue with a unique solution!
- Many-to-Many (Trips-to-Guidelines)

*This project is my first ever Django application!*
