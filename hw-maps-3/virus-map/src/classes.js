class Region
{
    // Province/State, Country/Region, Lat, Long, 1/22/20
    constructor(row)
    {
        [this.provinceOrState, this.countryOrRegion, this.latitude, this.longitude, ...this.data] = row;
        this.data = this.data.map(el => +el);
        this.latitude = +this.latitude; 
        this.longitude = +this.longitude;
        // this.provinceOrState = row[0];
        // this.countryOrRegion = row[1];
        // this.latitude = row[2];
        // this.longitude = row[3];
        // this.data = row.slice(4);
    }
}

export { Region };