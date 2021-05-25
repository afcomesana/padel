This a simple app used for the Medtronic employees to participate in an internal padel tournament.
The app consists in two forms, one for each player.
When the information is submited, the data will be sent to a google sheets instance, where the organizers will see all the couples.

The form data will also be sent to a firestore instance just in case something is wrong with the google sheets, which is more vulnerable to accidental modifications.

The firestore database could also be useful in future improvements of the app.
