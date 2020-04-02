export class GeoPosition {

    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }


    /**
     * Testé avec les coordonées suivantes :
     *  46.192802
        6.202916


        46.203774
        6.222748

        Réponse Google Maps : 1.94km
        Réponse de cette fonction : 1.95km

     */
    distance(otherPosition : GeoPosition) {
      var R = 6371; // km
      var dLat = this.toRad(otherPosition.latitude-this.latitude);
      var dLon = this.toRad(otherPosition.longitude-this.longitude);
      var lat1 = this.toRad(this.latitude);
      var lat2 = this.toRad(otherPosition.latitude);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    toRad(degress : number) {
        return degress * Math.PI / 180;
    }
}