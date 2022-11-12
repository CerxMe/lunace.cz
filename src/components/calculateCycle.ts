
import { createTimeOfInterest } from "astronomy-bundle/time";
import OnlineMembers from "./OnlineMembers.vue";
import { createMoon } from "astronomy-bundle/moon";
import { createEarth } from "astronomy-bundle/earth";
import type { Location } from "astronomy-bundle/earth/types/LocationTypes";
import {DateTime} from "luxon";



// čas nejbližšího úplňku
export async function nextFullMoon(date: Date) {
    // zeměpisné souřadnice
    const location: Location = {
        lat: 49.8175,
        lon: 15.4730,
        elevation: 430, // výška nad mořem
    };

    const toi = createTimeOfInterest.fromDate(date);
    const upcomingMoon = await createMoon(toi);
    const upcomingFullMoon = upcomingMoon.getUpcomingFullMoon();
    const fullMoon = await createMoon(upcomingFullMoon);
    const transit = await fullMoon.getTransit(location);
    return transit.getDate();
}