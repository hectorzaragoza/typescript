Inheritance vs Composition

Inheritance:
- use of an abstract class as parent to extend to a child class that can then customize behavior. (Child inherits from a parent class)
- Characterized by an 'is a' relationship between two classes
- Child class IS A parent class because it inherited the parent class properties.

Composition:
- a class had a reference to another object, in this case an interface that served as a gatekeeper for other classes to interact with that class.
- Characterized by an 'has a' relationship between two classes.
- a class would reference another class that is more specific and the parent class can then call a method with a unique implementation depending on the class it references.

Clarify misconceptions: "favor object composition over class inheritance"
Composition - Instead of a window being a rectangle, it should have a rectangle (or a circle) This fuels code reuse. (A class that references to another object - a window class with a dimension property that references another class(rectangle, circle, etc.))
- JS community is confusing composition for multiple inheritance.
- One (main, can also be thought of as a coordinator) object has references to other objects. The main object, delegates certain specific behaviors to those other objects.
- Composition and Delegation.

