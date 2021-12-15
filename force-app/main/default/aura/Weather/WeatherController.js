({
    //function called for handling the event
	doShow : function(component, event, helper) {
        console.log("yes");
        //Assign server method to actions variable
        var actions=component.get("c.weatherDetails"); 
        var startDate=event.getParam("firstdate");
        var endDate=event.getParam("secondDate");
        var City=event.getParam("city");
        //Setting parameters for server methods
        if(startDate != null && endDate != null && City != null){
        actions.setParams({
            startDate : startDate,
            endDate : endDate,
            City : City
        });
       }
        //callback method to get the response
        actions.setCallback(this,function(response){
            //getting response state
            var state=response.getState(); 
            if(state === "SUCCESS"){
                var responseValue=response.getReturnValue();
                console.log("responseValue",responseValue);
                //setting the attribute return by the server
                component.set("v.ObjectList",responseValue);  
            }
        });
        //Adding the action variable to the global action queue
        $A.enqueueAction(actions);
	}
})