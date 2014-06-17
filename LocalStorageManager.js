(function(w)
{
	"use strict";
	var _proto, _lsm,
	LocalStorageManager = function(keyName, data, version)
	{
		if (!("localStorage" in window))
		{
			return;
		}
		if(!keyName)
		{
			throw new Error("Please, provide an object name.");
		}
		_lsm = this;
		var lsmObject = _lsm.getObject(keyName);
		this.localKeyName = keyName;
		if(	lsmObject === null ||
			(lsmObject !== null && version !== undefined && ("version" in lsmObject) && version !== lsmObject.version) ||
			(lsmObject !== null && ("version" in data) && data.version !== lsmObject.version))
		{
			//set/reset local settings
			this.write(data, keyName);
			this.initialKey = data;
		}
		else
		{
			this.initialKey = lsmObject;	
		}
	};
	_proto = LocalStorageManager.prototype;
	_proto.objectVersion = 0;
	_proto.initialKey = undefined;
	_proto.localKeyName = undefined;
	_proto.flush = function(keyName)
	{
		var kName = (!keyName) ? this.localKeyName : keyName;
		if (localStorage.getItem(kName) === null)
		{
			return false;
		}
		else
		{
			delete localStorage[kName];
			return (localStorage.getItem(kName) === null);
		}
	};
	// Saves to local storage
	_proto.write = function(data, keyName)
	{
		if(typeof data !== "string")
		{
			data = JSON.stringify(data);
		}
		localStorage[((!keyName) ? this.localKeyName : keyName)] = data;
	};
	_proto.getObject = function(keyName)
	{
		var kName = (!keyName) ? this.localKeyName : keyName;
		var key = localStorage.getItem(kName);
		if(key === null)
		{
			return null;
		}
		key = JSON.parse(key);
		return key;
	};
	w.LocalStorageManager = LocalStorageManager;
})(window);