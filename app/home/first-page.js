
const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");
const settings = require('application-settings');

function onNavigatingTo(args) {
    const page = args.object;
    if( page.navigationContext ) {
        page.bindingContext = page.navigationContext;
    }
    else {
        page.bindingContext = new HomeViewModel();
        page.bindingContext.counter = settings.getNumber('counter', 0);
    }

}

function onTap(args) {
    const page = frame.getFrameById('innerFrame').currentPage;
    const label = page.getViewById('countLabel');
    page.bindingContext.counter++;
    settings.setNumber('counter', page.bindingContext.counter);
    console.log(`${label.style}`);
    label.style = 'font-size: ' + (20+page.bindingContext.counter) + 'px;';
//    const button = args.object;
//    const label = view.getViewById( button.parent, 'label' );
//    if( label ) {
//        label.text = `You've tapped ${page.bindingContext.counter} times`;
//    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
