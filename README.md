This calendar was made with react.The only third party library was momentJs for dates.State was managed with the context api.The style is plain css,I wanted to use Styled components but iwent for a simpler style for time reasons.

To run it download it,then use the Yarn install to install dependencies and yarn start to run locally in dev mode

 Features
● Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also,
include a city.
● Display reminders on the calendar view in the correct time order.
● Allow the user to select color when creating a reminder and display it appropriately.
● Ability to edit reminders – including changing text, city, day, time and color.
● Add a weather service call from a free API such as Open Weather Map, and get the
weather forecast (ex. Rain) for the date of the calendar reminder based on the city.
● Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user
entered day and time. Also, include a city.
Bonus (Optional)
● Expand the calendar to support more than the current month.
● Properly handle overflow when multiple reminders appear on the same date.
● Functionality to delete one or ALL the reminders for a specific day
Considerations
● Redux (or any other state manager) structure of the calendar.
● The project is totally focused on the front-end; please ignore the back-end.
● Keep your code versioned with Git.
● Feel free to use small helper libraries for:
○ UI Elements.
○ Date/Time handling.
● You must create the calendar component yourself. Do not use calendar libraries like
FullCalendar or Bootstrap Calendar.
● If you use an external API, make sure to provide working API keys.

Notes
● The calendar supports different years and months.To go to the previous or  next month click on a day of that month in the view
● you can delete indiviual taks or all the taks for a given day click on its respective button
●its common recommended practice to use an env file containing api keys and passwords but i coded it in the component for the tester convenience
●scroll for cells with multiple tasks
●I used the forecast of the curent day because i couldnt find a simple way to easily access past forecasts or ones far in the future
●I couldnt spend as much time as i wanted with the task,couldnt make a good mobile view
●IF the city doesnt exist or there is a problem with the weather api the forecast will be "not available"