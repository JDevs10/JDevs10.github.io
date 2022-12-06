export const Utils = {
    Function: {
        empty: function (value) {
            if (value === null || value === undefined) {
                return true;
            } else if (Array.isArray(value)) {
                if (value.length > 0) {
                    return false;
                }
                return true
            } else if (typeof value !== 'function') {
                return false;
            } else if (typeof value !== 'object') {
                return false;
            } else if (String(value) !== '') {
                return false;
            } else {
                return true;
            }
        },
        isScriptAdded: function (src) {
            return Boolean(document.querySelector('script[src="' + src + '"]'));
        },
        ajax: function (url, callback) {
            const httpRequest = new XMLHttpRequest();
            if (this.empty(httpRequest)) {return false;}
            httpRequest.onreadystatechange = function() {
                try {
                    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                        callback(httpRequest.responseText);
                    }
                } catch (e) {console.error('Ajax ERROR', e);}
            }
            httpRequest.onerror = function(e) {console.error('Ajax ERROR', e);}
            httpRequest.open('GET', url);
            httpRequest.setRequestHeader('Content-Type', 'text/plain');
            httpRequest.overrideMimeType('text/plain');
            httpRequest.send();
            return true;
        }
    }
}