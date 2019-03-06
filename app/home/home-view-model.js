const observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        items : [
            { text: 'hello' },
            { text: 'world' }
        ]
    });

    return viewModel;
}

module.exports = HomeViewModel;
