(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["search-rule"]=a(function(a,b,c,d,e){c=c||a.helpers;var f,g=this;return'<div class="search-content-box">\n  <div class="inside">\n\n    <div class="search-content-enable search-content-box-item">\n      <input name="enable-current-search-content" checked=\'checked\' type="checkbox" />\n    </div>\n\n    <div class="column-select search-content-box-item">\n      <select class=\'add_chosen\'>\n        <option value=\'any\'>Any</option>\n        <option value=\'all\'>All</option>\n      </select> \n    </div>\n\n    <div class="operator-select search-content-box-item">\n      <select class=\'add_chosen\'>\n        <option value=\'any\'>is</option>\n        <option value=\'all\'>is not</option>\n      </select>      \n    </div>\n\n    <div class="value search-content-box-item">\n      <input class=\'search-content-value\' placeholder="Enter search value" name="" type="text" /> \n    </div>\n\n    <div class="search-button-box-holder">\n      <div class="search-button-box-inside">\n        <div class="search-button-box">\n\n          <div title=\'Remove search rule\' class="search-content-remove search-content-box-item">\n            <img src="../images/icons/minus.png" alt="" />\n          </div>\n\n          <div title=\'Add new search rule\' class="search-content-add search-content-box-item">\n            <img src="../images/icons/add.png" alt="" />\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n'}),b.select=a(function(a,b,c,d,e){function q(a,b){var d="",e;return d+='style="width:',i=c.width,e=i||a.width,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"width",{hash:{}})),d+=o(e)+';"',d}function r(a,b){var d="",e;return d+='data-placeholder="',i=c.placeholder,e=i||a.placeholder,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"placeholder",{hash:{}})),d+=o(e)+'"',d}function s(a,b){return'<option value=""></option>'}function t(a,b){var d="",e;return d+='\n    <option value="',i=c.id,e=i||a.id,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"id",{hash:{}})),d+=o(e)+'">',i=c.value,e=i||a.value,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"value",{hash:{}})),d+=o(e)+"</option>\n  ",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression,p=c.blockHelperMissing;f+="<select ",i=c.width,g=i||b.width,h=c["if"],j=k.program(1,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+=' \n  class="add_chosen" \n  ',i=c.placeholder,g=i||b.placeholder,h=c["if"],j=k.program(3,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='\n  name="',i=c.name,g=i||b.name,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"name",{hash:{}})),f+=o(g)+'">\n\n  ',i=c.placeholder,g=i||b.placeholder,h=c["if"],j=k.program(5,s,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n\n  ",i=c.data,g=i||b.data,g=g===null||g===undefined||g===!1?g:g.value,j=k.program(7,t,e),j.hash={},j.fn=j,j.inverse=k.noop,i&&typeof g===l?g=g.call(b,j):g=p.call(b,g,j);if(g||g===0)f+=g;return f+="\n</select>\n\n\n",f})})()