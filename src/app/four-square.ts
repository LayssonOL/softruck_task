export class FourSquareComponent {
    CLIENT_ID: string = 'HWDQECDA0T20AJMSMNQUHU21QKEANAJCL1XGNT2GJRLKB3UG';
    CLIENT_SECRET: string = '1IUVXAV5D1BFKXP5A1JFUNVZQXCVT304TS4MGCVKRYJECGHE';
    PUSH_SECRET: string;
    Push_Url: string;
    EndPoint: string;
    key: string;
    params = 'near=New+York+University'; 
    Base_URL = 'https://api.foursquare.com/v2/';
    //  url: "https://api.foursquare.com/v2/venues/explore?ll="+lat+","+lng+"&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&v=20130619&query="+$("#query").val()+"",
    constructor(){
        this.PUSH_SECRET ='RVYEDFK2UT2IJT4PWTKHG44NABEGV15R01D1HKAGZWPOTTVQ';
        this.key = '&client_id=' + this.CLIENT_ID + '&client_secret=' + this.CLIENT_SECRET + '&v=' + '20170713';
    }
    mountEndPoint(lat, lng){
        this.EndPoint = 'venues/explore?ll=' + lat + ',' + lng;
        return this.EndPoint;
    }
}
