// Context api is allow us to directly share data/state in multiple component without passing props mannually.

// Why need :- When we want to share data from parent to child it's easy but in larger project
//             there are lots of nested component , there if we required to share data in nested then we are using
//             props and pass data from parent to child to nested child , to more nested child to grand child this
//             make hierarchy and it's called prop drilling. And in prop drilling there are fear of lost of data
//             and prolem of state management.

// How to use :- There are 3 steps.

//               1. Create Context in Parent component inside a variable.
//               2. Create Provider in same componet and wrapped parent component with above created variable.Provider.
//               3. Consumed context export with the use of useContext hook.


// Drawback of context API :- 

//               1. Performance issue when all consumed componed are using same State and we are updating in one place and changes are reflected in everywhere.
//               2. It's make confusion when we are trying to access component , beacause it's stucture is not well not in a organized manner.
 