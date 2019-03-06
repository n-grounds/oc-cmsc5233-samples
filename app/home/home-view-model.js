const observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        items : [
            { text: 'hello' },
            { text: 'world' }
        ],
        test: 'test this'
    });

    return viewModel;
}

module.exports = HomeViewModel;
