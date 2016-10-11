// This file represents the JavaScript Debate object.

function Debate(id, ownerid, name, defaultBaseValue, participants, typeValue){

	// Attributes.
	this.id = id;
        this.ownerid = ownerid;
	this.name = name;
	this.defaultBaseValue = defaultBaseValue;
        // this.participants = participants;
	this.typeValue = typeValue;


	// Mothods.
	this.displayInfo = displayInfo;
        this.editInfo = editInfo;
}


function displayInfo(){

  var msg = "<h3> Info </h3>";
    msg += "<ul id='info' style='list-style-type: none;'>";
    msg += "<li>Id: &nbsp; <b>"+this.id+"</b></li>";
    msg += "<li>ownerid: &nbsp; <b>"+this.ownerid+"</b></li>";
    msg += "<li>Name: &nbsp; <b>"+this.name+"</b></li>";
    msg += "<li>Default base value: &nbsp; <b>"+this.defaultBaseValue+"</b></li>";
    msg += "<li>Type value: &nbsp; <b>"+this.typeValue+"</b></li>";
    msg += "<li id='participants'>Participants: <b>"+getParticipants(this.id,this.ownerId)+"</b></li>";
    msg += "</ul>";
  bootbox.alert(msg);

}

function editInfo(name, defaultBaseValue, participants, typeValue){
  this.name = name;
  this.defaultBaseValue = defaultBaseValue;
  this.participants = participants;
  this.typeValue = typeValue;
}

function getParticipants(debateId,ownerId) {
    
        $.ajax({
            type: "POST",
            url: "get-rights.php",
            data: "did="+debateId+"&uid="+ownerId,
            cache: false,
            success: function(dat) {
                
                console.log(dat);
                $('#participants').html(dat);
       
            }
        });

}

function getParticipantsDialog(debateId,ownerId) {
    
        $.ajax({
            type: "POST",
            url: "get-rights.php",
            data: "did="+debateId+"&uid="+ownerId,
            cache: false,
            success: function(dat) {
                
                console.log(dat);
                bootbox.alert(dat);
       
            }
        });

}