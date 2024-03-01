// ## **Part 2**

// Define a *Tweet* component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

// Create an *App* component that renders at least three tweets.

// Style your *Tweet* component using a CSS class.

const Tweet = ({username, name, date, message}) => {
    return (<div class="tweet">
        <h3 class="name">{name}</h3>
        <p class="username">{username}</p>
        <p class="date">{date}</p>
        <p class="message">{message}</p>
    </div>);
}