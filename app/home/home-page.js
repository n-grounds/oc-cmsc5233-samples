/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const frame = require('tns-core-modules/ui/frame');
const HomeViewModel = require("./home-view-model");

function onPageLoaded(args) {
    const page = args.object;
    page.getViewById('gotoSettings').on( 'tap', (args) => {
        frame.topmost().navigate( {
            moduleName: 'home/settings',
            context: {}
        } );
    } );
}

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();

    fetch('https://catfact.ninja/facts?limit=10').then(
        (value) => { value.json().then( (obj) => {
            //the following simulates a 10 second delay fetching cat facts
            //setTimeout( () => { page.bindingContext.items = obj.data }, 10000 );
            page.bindingContext.items = obj.data;
        } ); },
        (reason) => { console.error( `When fetching catfacts: ${reason}` ); } );
}

exports.onPageLoaded = onPageLoaded;
exports.onNavigatingTo = onNavigatingTo;
