#React-Redux

>> Redux is a predictable state container for javascript application.

>> React is a Ui management library and the Redux is the state management library and they work independently to eachother.

>> React-redux is a library that provides bindings to use React and Redux together in an application.

<< "First part in only redux independent of React" >>

>> Three core concepts of Redux : 
Store : Holds the state of our application.
Action : Describes what happened i.e. describes the changes in the state of the application.
Reducer : Ties the store and actions together, actually carries out the state transition depending on the action.

>> Three Principles of Redux : 
1. "The state of our whole application is stored in an object tree within a single store",
   i.e. Maintain our application state in a single object which would be managed by the Redux Store.

2. "The only way to change the state of your application is to emit an action, an object describing what happened",
   i.e. To update the state of our application, we need to let redux know about that with an action, so we are not allowed to directly update the state object.

3. "To specify how the state tree is transformed by actions, we write pure reducers",
   i.e. Reducer - (previousState,action) => newState

>> so redux update store when App -> dispatch(Action) -> Reducer -> Redux Store(state) -> App is subscribed so it will update

<< Redux Store and its responsibility >>
>> One store for the entire application

>> Responsbility : 
: Holds application state
: Allows access to state via getState() method
: Allows state to be updated via dispatch(action) method
: Registers listeners via subscribe(listener) method
: Handles unregistering of listeners via the function returned by subscribe(listener)