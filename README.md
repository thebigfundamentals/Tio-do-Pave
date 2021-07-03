# O Tio do Pavê

O Tio do Pavê is a small project, consisting of retrieving dad jokes to the user from a local database, which was set using [nedb](https://github.com/seald/nedb) by Seald.

The project is based on a Node.js server. Frontend development was made using Bootstrap.

The code itself is just JavaScript, and I used [axios](https://github.com/axios/axios) to `GET` routes.

There is no security whatsoever on the `add.html` page. However, since it is deployed to Heroku (you can check it on [here](https://tiodopave.herokuapp.com/)), any changes made through the deployed version won't persist. 

It can be overcome using features as MongoDB, but I'm not comfortable with it yet.

I still intend to implement a search feature by keyword. It is quite simple using NeDB features, so it may be out there in a moment.

A 2nd version, in full English, is also intended. 

The jokes were found on the internet, mainly on Reddit [/tiodopave](https://www.reddit.com/r/tiodopave/).

That's it for now.

gsc.
