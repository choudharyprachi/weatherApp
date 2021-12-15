({
    //function called for initialisation of page
	doInit : function(component, event, helper) {
        //setting the columns attribute value
		component.set('v.columns', [
            {label: 'Date', fieldName: 'Date__c', type: 'date'},
            {label: 'Weather', fieldName: 'Weather__c', type: 'text'},
            {label: 'Temperature', fieldName: 'Temperature__c', type: 'number'},
            {label: 'Min Temperature', fieldName: 'Min_Temperature__c', type: 'number'},
            {label: 'Max Temperature', fieldName: 'Max_Temperature__c', type: 'number'},
            {label: 'Pressure(hPa)', fieldName: 'Pressure__c', type: 'number'},
            {label: 'Air Speed(mps)', fieldName: 'Air_Speed__c', type: 'number'},
            {label: 'Humidity', fieldName: 'Humidity__c', type: 'number'},
        ]);

	}
  
})