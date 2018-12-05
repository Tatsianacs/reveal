CSS animation and Event Loop

Hello, my Name is Tatsiana and I will show the following presentation about Event Loop and CSS Animation.Let's start from Event Loop.
As you may have heard JS is singled-threaded, it means it has only one thread, one callstack and one thing at a time can be executed.
So if a function wants to be executed, it has to wait when the previous one finishes its execution.
Popular JS engine - V8 - it is used in Chrome - it has 2 main components: Memory Head and Call Stack. Call Stack keeps tracking which function is currently executing and if it calls another function, it will be put on the top of call stack. Once a function resturns a value, it will be popped out from the call stack.
JS never runs in isolation, it has its hosting environment. So typical examples of hosting environment are browser, Node.js. But nowadays Javascipt can be embedded into any device and it means it may have different hosting environments.
These hosting environments provide applications, in browser Web APIs. They can do different things like listen to DOM events, send asynchronous requests or delay execution. When they have something to return to you, they schedule a callback function to be executed by putting a task into callback queue. And now it is time for Event Loop: it checks wether we have a callstack empty and if yes, it picks up a task from call queue and puts into callstack and then this task is executed.
Let's check an example: we have a console.log('Hi'), then setTimeout with console.log and 5 sec delay and then console.log with 'Bye'. So how it will be handled?

At first, we have everything empty: console, call stack, web API, task queue. Then we have a first console.log('Hi') put into the callstack, then it is executed: we see 'Hi', and then console.log('Hi')  is popped out from the callstack. Next we have setTimeout', it is put into callstack and it creates a timer in Web APIs and popped out from the callstack. At the time timer runs into Web APIs and then we have console.log('Bye') in our callstack, it is executed: we see 'Bye' in browser console, and it is popped out from the callstack. When the timer finishes, it schedules a task and event loop checks whether we have anything in the callstack, puts this into the callstack, it calls console.log('cb1'), it is executed, popped out from the callstack and now setimeout function cb1 is popuped from the callstack. 

That is it, this is an example of event loop.
So as you may have seen, event loop is infinitely looping and looking for new tasks to execute. There are different task sources. Generic task sources are: 
The DOM manipulation
The user interaction
The networking
The history traversal
There are interesting things about task queues:
at first, it is ordered list of tasks. It means that tasks have to be executed in the order that put to this queue.
Event loop may have only 1 microtask but it may have one or more macrotasks.
Here are examples of what are macro and microtasks. So promies are microtasks and setTImeout is mactrotask.
For each loop the ‘event loop’ executes only one macrotask. After that macrotask is complete, the event loop visits the microtask queue and executes all tasks from this queue. This entire process of reading code, queueing up tasks, and executing tasks is the event loop.
The interesting thing is that handling and definition of macrotask and microtask is up to the Browser. It means that the browser may give priority to some tasks, so the browser may set up a separate task queue for keyboard and mouse events and gives the priority to be executed 3/4 of time, and for other tasks it gives only 1/4 of time for execution (so they are not blocked). The only way to know how the browser will handle your code is just to run its in the browser, because, as I said, it is up to be browser to define the priority for different tasks.
So it is another example of Event Loop but now with Promises, promises are microtasks. What will we have in browser console? Let's check.
I have checked in different modern browsers, the latest versions and now all browsers are consistent. They have at first console.log executed, then promises, then setTimeout. But it was not always the case. I checked also FF v50 and as you can see setTimeout was executed before Promises. And also we had a bug with Mutate but now it is fixed and all modern browsers have similar behaviour.
 If you are interested in more examples, you can visit this link.
 Also I advise to visit this Loop visualisation where you can enter your code and run, and you can check what happens in the callstack, Web APIs and callback queue. Now you can see what happens if I click the button once. And what happens if I click the button 4 times.
 
 Ok, the next topic is CSS animation. There are 2 primary ways to do web animation: via JS and via CSS. 
 A few words about JS animation. You may have seen that animation can be done via SetInterval but it is not a good way to do this because as we discussed setInterval (similar to setTimeout) is macrotask and you cannot guarantee when it will be executed.
 So the good way to animate is to use requestAnimationFrame. You put your function into requestAnimationFrame and it means that you request the browser to execute your animation before the next repainting. Your animation is guaranteed to be executed.
 
 So another way to do JS animation is Web Animations API but it is experimental, some properties are not supported at all, so before using it, it is better to check the documentation.
 
 It is an example of JS animation.
 CSS animation can be done via CSS Transitions. You can specify which property will be transitioned. And there are animatable properties and not animatable. If you are interested in which properties are animatable, you can click this link to check. So in your JS you can manipulate by this animation by assigning or removing these classes.
 Here is a result of this animation. If we check 'can I use?', we can see that it supported in all modern browsers.
 
 CSS animation can be done also via keyframes. You are familiar with this. And if you check 'Can I use?', you can see that it is also supported in all modern browsers, so you can use it.
 
 CSS Triggers: some CSS properties - changes in these properties - will result in repainting.  The mpre repainting, the poorer the performance. So when you do your animation, it is better not to animate properties like hight, width, margin. Only opacity, transform are the best for animation. 
 
 So we have a site CSS triggers where you can check which property can result in layout, paint or composite changes. You can see, for example, Gecko Browser Engine will not do repaint if you change opacity or transform. If you are interested in more CSS triggers examples, you can visit this link.
 
 We also have 'will-change' property. It is a way to tell the browser which element will change and which property will change. But important notice is that you shouldn't use it just to prevent any performance problem, only if you know for sure that you will have performance problem you should use this property. So it is an example.
 If you are interested in animation performance, you can use your dev tools, performance, timeline to check how your animation wll be handled with different Network and CPU settings. This is an example of fast mode: you can see rendering and painting, how long does it take. And also in slow mode: rendering and painting take much more time.
 
 Some cool examples of pure CSS animations: subset and moon, bubbles, also a clock. 

I also prepared userful links, if you are interested in more information, you can visit these links.
Thank you. That's it. 
