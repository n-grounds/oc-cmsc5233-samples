
const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    const page = frame.getFrameById('innerFrame').currentPage;
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
