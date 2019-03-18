/*
It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
*/

let getRunRobotTurns = (state, robot, memory) =>
{
	let turns = 0;
	for (let turn = 0;; turn++) 
	{
		if (state.parcels.length == 0) {
			return turn;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}
	
let compareRobots = (robot1, memory1, robot2, memory2) =>
{
	let robot1Sum = 0;
	let robot2Sum = 0;
	
	for(let i = 0; i < 100; i++)
	{
		let state = VillageState.random();
		robot1Sum += getRunRobotTurns(state, robot1, memory1);
		robot2Sum += getRunRobotTurns(state, robot2, memory2);
	}
	
	console.log(robot1Sum / 100);
	console.log(robot2Sum / 100);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
