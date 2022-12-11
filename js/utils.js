export const Utils = {
    Function: {
        /**
         * @description Check if value is empty
         * @param {*} value 
         * @returns Boolean
         */
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
        isString: function (value) {
            if (typeof value === 'string' || value instanceof String) {return true;}
            return false;
        },
        /**
         * @description Find and load document element
         * @param {String} elemId Element id
         * @returns HTMLElement
         */
        load : function (elemId) {return document.getElementById(elemId);},
        /**
         * @description Pick an item randomly from a list
         * @param {Array} list 
         * @returns Item
         */
        choose : function (list) {return list[Math.floor(Math.random()*list.length)];},
        isScriptAdded: function (src) {
            return Boolean(document.querySelector('script[src="' + src + '"]'));
        },
        ajax: function (url, callback) {
            const httpRequest = new XMLHttpRequest();
            if (this.empty(httpRequest)) {return false;}
            httpRequest.onreadystatechange = function() {
                try {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        callback(httpRequest.responseText, httpRequest.status);
                    }
                } catch (e) {console.error('Ajax ERROR', e);}
            }
            httpRequest.onerror = function(e) {console.error('Ajax ERROR', e);}
            httpRequest.open('GET', url);
            httpRequest.setRequestHeader('Content-Type', 'text/plain');
            httpRequest.overrideMimeType('text/plain');
            httpRequest.send();
            return true;
        },
        /**
         * @description Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         * @param {String} text The text to be rendered.
         * @param {String} style The style that text is to be rendered with (e.g. "").
         * @return number in pixels
         * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
         */
        measureText: function (text, style = null) {
            let lDiv = document.createElement('div');
            document.body.appendChild(lDiv);
        
            if (style != null) {
                lDiv.style = style;
            }
            lDiv.style.position = "absolute";
            lDiv.style.left = -1000;
            lDiv.style.top = -1000;
            lDiv.style.zIndex = -1000;
            lDiv.textContent = text;
        
            const lResult = {
                width: lDiv.clientWidth,
                height: lDiv.clientHeight
            };
            document.body.removeChild(lDiv);
            lDiv = null;

            return lResult;
        }
    }
}