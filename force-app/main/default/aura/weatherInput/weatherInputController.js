({
    //function called on the button click
	myAction : function(component, event, helper) {
        //getting the event from the component
		var componentEvent=component.getEvent("weatherEvent");
        //Setting the event attributes value
        componentEvent.setParams({
            firstdate : component.find("fromdate").get('v.value'),
            
            secondDate : component.find("todate").get('v.value'),
            city : component.find("cityname").get('v.value')
        })
        console.log(component.find("fromdate").get("v.value"));
        //firing the event
        componentEvent.fire();
	}
})
