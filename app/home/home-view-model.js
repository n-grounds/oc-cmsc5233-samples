const observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        items : [
            { fact: 'Loading data...' }
        ]
    });

    return viewModel;
}

module.exports = HomeViewModel;
