LocalStorageManager
===

A simple wrapper for the localStorage browser API.

## Usage ##

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
### What's up with <code>version</code> param/property?
The idea of having a <code>version</code> property in your <code>data</code> object is to make it overwrite a similar object saved in the client browser avoiding an outdated object f\*@k around with your code.
So if the <code>keyName</code> parameter matches a key in the <code>localStorage</code> it will overwrite that mofo. If you put anything as the <code>version</code> it tries to compare with the <code>version</code> property (_if existent_) in the <code>localStorage</code>.

## Beta…ish ##
 
This is a working in progress and for sure there are improvements to be made.