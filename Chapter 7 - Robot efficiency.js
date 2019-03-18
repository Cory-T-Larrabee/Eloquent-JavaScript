/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/
function pathFinderRobot({place, parcels}, route) {
  if (route.length == 0) {
    let paths = parcels.map(parcel => {
		if (parcel.place != place) {
			return {route: findRoute(roadGraph, place, parcel.place),
			pickup: true};
			;
		} else {
			return {route: findRoute(roadGraph, place, parcel.address),
			pickup: false};
		}
	});
	
	function priority ({route, pickup}) {
		return(pickup ? 0.1 : 0) - route.length;
	};
	
	route = paths.reduce((a, b) => priority(a) > priority(b) ? a : b).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}

compareRobots(goalOrientedRobot, [], pathFinderRobot, []);
