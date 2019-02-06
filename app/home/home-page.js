
const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
}

function goto(args) {
    const pageName = args.object.text;
    console.log( `${pageName} : ${args.object}` );
    if( pageName == 'First Page' ) {
        frame.getFrameById('innerFrame').navigate( {
            moduleName: 'home/first-page',
            context: frame.getFrameById('innerFrame').currentPage.bindingContext
         } );
    }
    else if( pageName == 'Second Page' ) {
        frame.getFrameById('innerFrame').navigate( 'home/second-page' );
    }
    //remember to close the drawer after navigating
    const page = frame.getFrameById('topFrame').currentPage;
    const drawer = page.getViewById('sideDrawer');
    drawer.closeDrawer();
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'home/second-page' );
}

exports.onNavigatingTo = onNavigatingTo;
exports.openDrawer = (args) => {
    const f = frame.getFrameById('topFrame');
    const page = f.currentPage;
    const drawer = page.getViewById('sideDrawer');
    drawer.toggleDrawerState();
};
exports.goto = goto;
exports.gotoPrefs = gotoPrefs;
