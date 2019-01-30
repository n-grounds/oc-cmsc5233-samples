/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    const page = frame.topmost().currentPage;
    page.bindingContext.counter++;
//    const button = args.object;
//    const label = view.getViewById( button.parent, 'label' );
//    if( label ) {
//        label.text = `You've tapped ${page.bindingContext.counter} times`;
//    }
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'home/second-page' );
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
exports.gotoPrefs = gotoPrefs;
