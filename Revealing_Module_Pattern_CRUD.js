//********* REVEALING MODULE PATTERN
var sample = (function(){
	var name = [];

	var defaultText = "CRUD";
	function returnDefaultText()
	{
		return defaultText;
	}

	function sayNames(){
		if (name.length == 0)
		{
			return "Empty list.";
		}
		else
		{
			return name;
		}
	}
	
	function deleteName(nem)
	{
		if (name.indexOf(nem) >= 0) //indexOf SEARCHES A MATCH IN THE ARRAY AND RETURNS ITS INDEX
		{
			id = name.indexOf(nem);
			name.splice(id, 1);
			return "Deleted " + nem + ".";
		}
		else
		{
			return "Did not find " + nem + ".";
		}
	}

	function addName(nem)
	{
		if (nem != "" && nem != null)
		{
			if (name.indexOf(nem) >= 0)
			{
				return "Name already on the list.";
			}
			else
			{
				name.push(nem);
				return "Added " + nem + ".";
			}
			
		}
		else
		{
			return "Please specify the name.";
		}
		
	}

	function updateName(nem, newnem)
	{
		var oldname = nem;
		var newnem = newnem;
		if (name.indexOf(nem) >= 0)
		{
			var id = name.indexOf(nem);
			name[id] = newnem;
			return "Changed " + oldname + " to " + newnem + ".";
		}
		else
		{
			return "Did not find " + nem + " on the list.";
		}
	}

	function deleteAll()
	{
		name = [];
		return "Emptied the list.";
	}


	return{

		sayNames: sayNames,
		addName: addName,
		deleteName: deleteName,
		deleteAll: deleteAll,
		updateName: updateName,
		defaultText: defaultText,
		returnDefaultText: returnDefaultText
	}
})()