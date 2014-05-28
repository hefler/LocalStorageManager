LocalStorageManager
===

A simple wrapper for the localStorage browser API.

## Usage ##

Just add your CSS file into the <code>head</code> and test how your CSS will affect HTML elements.

	/** Create a new instance of LocalStorageManager
	*	@param keyName	A string for the key
	*	@param data		The value of the key (an string or object)
	*	@param version	[optional] This is a parameter to test against a previous local saved version of the same key. So if the version is different than the local we overwrite it.
	*/
	var lsm = new LocalStorageManager(keyName, data, [version]); 
	
	/**
	*	Write to save data to localStorage (note: this is no merge, everything will be overwritten).
	*	@paran data	The value of the key (an string or object)
	*	@param keyName [optional] If no name is provided the value provided in the constructor will be used.
	*/
	lsm.write(data, keyName);
	
	/**
	*	Deletes the key from localStorage.
	*	@param keyName [optional] If no name is provided the value provided in the constructor will be used and flushed.
	*	@return Returns true if the key was found and deleted.
	*/
	lsm.flush(keyName);
	/**
	*	Write to save data to localStorage (note: this is no merge, everything will be overwritten).
	*	@param keyName [optional] If no name is provided the value provided in the constructor will be used.
	*	@return Returns the key as an <code>object</code>.
	*/
	lsm.getObject(keyName);

## Beta…ish ##
 
This is a working in progress and for sure there are improvements to be made.