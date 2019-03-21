/*
These are the bindings that the project from Chapter 7 creates:

roads
buildGraph
roadGraph
VillageState
runRobot
randomPick
randomRobot
mailRoute
routeRobot
findRoute
goalOrientedRobot
If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?
-----------------------------------------------------------------------------------------
The program is based around the road graph so I would build a graph module that contains buildGraph.  The function could be rewritten to fit common existing pathfinding modules to make the code reusable.

A roads module should be created to house the raw roads data and the roadGraph pointer.  Roads module will depend on the graph module.

A module should be devoted to the state of the village and its functions such as random pick.  Since the village state changes during runRobot, this function would be in this module. The village state module will depend on the roads modules and its data.  

There should be a robot module that contains the example robots.

Pathfinding packages and random pick\number libraries already exist on NPM and could be used in this project.  I think using packages holds value when they perform complex code or common code so you don’t have the reinvent the wheel again. However, you should consider any side effects of using the code such as size of the code and if you need to rewrite your code to fit the shape of the expecting values. If the code was simple and small then you should write it yourself.
*/
