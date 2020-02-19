# Callback


# Promises
 * A Promise works by taking a function with (optionally) two arguments resolve and reject. The passed in function executes some async code and either resolves or rejects.
 * Once the Promise resolves, its then() method executes a handler function with the emitted value.
 * Emits a single value.
 * A Promise executes the moment it's defined. Even if we don't call then(), the Promise executes. This is considered eager execution.
 * A Promise can't be canceled.
 * A Promise is unicast meaning you get the same value every time you call the async flow
 * A Promise has async handlers. This means a Promise won't execute synchronously with the rest of your code

# Observables
 * Observables (in the JavaScript context) are the RxJS implementation of the observer design pattern.
 * Emits multiple values next().
 * Observable is lazy in nature and do not return any value until we subscribe
 * An Observable executes only when subscribe() is called. If we don't call subscribe(), nothing executes. This is considered lazy execution.
 * An Observable can be canceled via unsubscribe()
 * An Observable is multicast meaning a separate execution occurs for every call to subscribe
 * An Observable has sync handlers. This means an Observable WILL execute synchronously with the rest of the code