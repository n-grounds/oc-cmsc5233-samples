var o = { firstname : 'Nicolas', lastname : 'Grounds',
        getName : function() {
            return this.firstname + ' ' + this.lastname;
        } };
console.log( `Hello, ${o.getName()}` );
