var o = { firstname : 'Nicolas', lastname : 'Grounds',
        getName : function() {
            return this.firstname + ' ' + this.lastname;
        } };
o.toString = function() {
    return this.getName();
}
console.log( `Hello, ${o}` );
