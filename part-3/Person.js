// Create a component called *Person*. 
// Inside of this component, render a *p* tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional *h3* that says “please go vote!”. 
//Otherwise, display an *h3* that says “you must be 18”. 
//If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

// Add an *App* component that renders at least three copies of the *Person* component on the page.

const MAX_NAME_LENGTH = 6;


const Person = ({age, name, hobbies}) => {
    let message
    if(age >= 18 ){
        message = "Please go vote!"
    } else {
        message = "You must be 18"
    }
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {name.slice(0, MAX_NAME_LENGTH)}</li>
          <li>Age: {age}</li>
          <ul>
            Hobbies:
            {hobbiesLIs}
          </ul>
        </ul>
        <h3>{message}</h3>
      </div>
    );
  }