import request from '@/api/config.js'
export const apiGetCityRoute = (city)=>request.get(`Route/City/${city}`) 
export const apiGetRouteArrival = (city,route)=>request.get(`EstimatedTimeOfArrival/City/${city}/${route}`) 
export const apiGetStopOfRoute = (city,route)=>request.get(`StopOfRoute/City/${city}/${route}`) 
export const apiGetBusStopOfRoutesByBusStop = (city,stop)=>request.get(`StopOfRoute/City/${city}?$filter=Stops/any(c: c/StopName/Zh_tw eq '${stop}')`);
export const apiGetRouteInfo = (city,route)=>request.get(`Route/City/${city}/${route}`) 
export const apiGetOperatorInfo = (city,operator)=>request.get(`Operator/City/${city}?$filter=OperatorName/Zh_tw eq '${operator}'`);
export const apiGetStopInfo = (city,stop)=>request.get(`Stop/City/${city}?$filter=StopName/Zh_tw eq '${stop}'`);
