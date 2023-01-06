# Travel Station

## Featured Home Page

Here you will find mine and my boyfriend's latest travel destination along with a photo and some information about my trip!

## Past Travels

Want to know every place my boyfriend and I have been to together? Check it out here!

## Future Travels

Everybody wants to go places, right? Come here to see what we want to do next!

## Memories

A showcase of some of my favorite memories from our trips together!


## Description

The Navigation Bar at the top will allow you to pick between what page you would like to view! It will automatically direct you to the Featured Home Page, but from there it is up to you what to see next!
In the Past Travels page you will be able to filter the travels by state!
Within the Future Travels page, you are able to click a button to view a form, which will then allow you to submit new travel plans for the future. There is also a delete button and a complete button. With the delete button, if plans are canceled or changed you can delete the old information, and if needed use the form to create a new travel plan! With the completed button, it will create add the data to the Past Travels page.
The Memories tab allows a place for you to house what you want to remember about your travels. This also includes a form for new memories, a delete button, and you can filter this by state too!

Button to display the form:
```bash
<button onClick={handleWantClick}>{wantValue}</button>
```

Form to submit new data about:
```bash
<form onSubmit={handleFutureSubmit}>
```

Delete button:
```bash
<button onClick={handleFutureDelete} className="delete">🗑️</button>
```

Complete button:
```bash
<button onClick={handleCompleteDelete} className="complete">Complete 🗸</button>
```

## Form Example

```python
# Form HTML

            <form onSubmit={handleFutureSubmit}>
                Enter New Travel Plans Here:
                <br></br>
                <input type="text" id="city" value={formData.city} onChange={handleFutureChange} placeholder="City/Activity"/>
                <br></br>
                <input type="text" id="state" value={formData.state} onChange={handleFutureChange} placeholder="State"/>
                <br></br>
                <input type="text" id="date" value={formData.date} onChange={handleFutureChange} placeholder="Date"/>
                <br></br>
                <input type="text" id="reason" value={formData.reason} onChange={handleFutureChange} placeholder="Reason for the trip"/>
                <br></br>
                <input type="text" id="photo" value={formData.photo} onChange={handleFutureChange} placeholder="Image URL"/>
                <br></br>
                <button>Submit</button>
            </form>
```

## Contributing

Suggestions are welcome.

## Acknowledgment
Photos are taken by Jonathan Peterson and myself.