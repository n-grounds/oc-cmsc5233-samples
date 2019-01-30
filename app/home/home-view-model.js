const observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        counter : 0
    });

    return viewModel;
}

module.exports = HomeViewModel;
