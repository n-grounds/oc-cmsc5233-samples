
const settings = require('tns-core-modules/application-settings');
const observable = require('tns-core-modules/data/observable');

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = observable.fromObject( {
        fontSize: settings.getNumber( 'fontSize', 18 )
    } );
    page.bindingContext.on( observable.Observable.propertyChangeEvent,
        (data) => {
            if( data.propertyName == 'fontSize' ) {
                settings.setNumber( 'fontSize', data.value );
            }
        } );
}

exports.onNavigatingTo = onNavigatingTo;