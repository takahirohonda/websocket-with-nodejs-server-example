# Interpreting the chrome dev tools performance

## Notes

- When we are looking at the fire graph of memory snapshot, it's not about reducing the size. We should focus on reducing the percentage of memory usage of a certain things. This is because locally memory usage size can vary and not very accurate.

- Idle time in performance means either the program is running efficient or not running efficient. But, this test, longer idle time indicates more efficiencies of the library because there is little business logic to the tested code.

## Terms

### (V8 API) in the memory usage graph.

`(V8 API)` represents:

**Internal V8 Memory Structures:** Memory allocated for internal V8 data structures and APIs, like garbage collection (GC) metadata, the JavaScript heap, or runtime handles.

**Compiled JavaScript Code:** Memory consumed by compiled functions, scripts, or other code artifacts that V8 has optimized or just-in-time compiled (JIT).

**Hidden Classes and Inline Caches:** V8 creates "hidden classes" to optimize object property access, and inline caches to speed up repetitive tasks. Memory used here can show up under (V8 API).

**Garbage Collection-Related Structures:** The label may also cover memory overhead related to V8’s garbage collection system, including memory that has not yet been freed.

### Callback Trampoline

A `callback trampoline` is a programming technique used to prevent deep recursion in synchronous callback chains by breaking up execution into smaller chunks. It’s especially useful in JavaScript, where deep recursion can cause a "maximum call stack exceeded" error due to limited stack space.

The basic idea is to run recursive functions iteratively instead of using the call stack for each recursion step. This is done by deferring each recursive step to the event loop, giving the JavaScript engine time to clear the call stack between recursive calls. Here’s how it works:

**How a Callback Trampoline Works**

Instead of calling the recursive function directly, each recursive step is scheduled to run as a separate event in the event loop. This is often achieved using setTimeout, setImmediate, or process.nextTick (in Node.js). This way, each function call is added to the event loop, avoiding stack overflow.
