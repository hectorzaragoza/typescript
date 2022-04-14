# Build a Framework with TypeScript

Two types of classes:
1) Model Classes - handle data, used to represent Users, Blog Posts, images, etc.
2) View Classes - handle HTML and events caused by the user 

Serialize: Convert data from an object into some save-able format (json)
Deserialize: Put data on an object using some previously saved (json) (api response)

Generic classes - customize the type of "data" coming into the class when instantiated. Offers the most flexibility for reuse.

When using a generic, TS doesn't know what properties that generic type will eventually return, so trying to call a property on that generic type (before it has been defined) will produce an error. Satisfy the requirement by having the generic type extend an interface that has the property you are trying to reference in the generic class.
    But, any instantiation of that generic class will have to satisfy the interface!

In TS, strings can be types. All object keys are strings. Therefore, object keys can be types.