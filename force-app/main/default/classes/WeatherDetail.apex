public with sharing class WeatherDetail {
    @AuraEnabled
    public static List<Weather__c> weatherDetails(Date startDate,Date endDate,String City){
        List<Weather__c> weatherList=new List<Weather__c>();
        System.debug('startDate'+startDate);
        System.debug('endDate'+endDate);
        Weather__c weather=new Weather__c();
        weather= madeCallout(City); 
        weatherList.add(weather);
       return weatherList;
}
    public static Weather__c madeCallout(String City){
        Weather__c wthr=new Weather__c();
        Http http=new Http();
        HttpRequest request=new HttpRequest();
        request.setEndpoint('http://api.openweathermap.org/data/2.5/weather?q='+city+'&id=524901&appid=dc61a63a1c5bd8452eda74b0956f21f5');  
        request.setMethod('GET');
        HttpResponse response=http.send(request);
        if(response.getStatusCode()==200){
            System.debug('responseBody:'+response.getBody());
            Map<String,Object> result=(Map<String,Object>)JSON.deserializeUntyped(response.getBody());
            List<Object> weather=(List<Object>)result.get('weather');
           Map<String,Object> weatherVar=(Map<String,Object>)weather[0];
            wthr.Weather__c=(String)weatherVar.get('main');
            Map<String,Object> main=(Map<String,Object>)result.get('main');
            wthr.Temperature__c=(Double)main.get('temp'); 
            wthr.Min_Temperature__c=(Double)main.get('temp_min');    	
             wthr.Max_Temperature__c=(Double)main.get('temp_max');            	
             wthr.Humidity__c=(Integer)main.get('humidity');      
            wthr.Pressure__c=(Double)main.get('pressure');	
            Map<String,Object> wind=(Map<String,Object>)result.get('wind');
            wthr.Air_Speed__c=(Double)wind.get('speed');
            wthr.City__c=City;
            wthr.Date__c=Date.today();
            System.debug('Date:'+wthr.Date__c);
            //insert wthr;
            }
        return wthr;
    }
}