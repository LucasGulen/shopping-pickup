export class GeoPosition {

    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    distance(otherPosition : GeoPosition) : number {
        const radlat1 = Math.PI * this.latitude/180;
		const radlat2 = Math.PI * otherPosition.longitude/180;
		const theta = this.latitude-otherPosition.latitude;
		const radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344 * 1000;
		return dist;
    };
}