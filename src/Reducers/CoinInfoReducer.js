const initialState = {
    coinInfo:{},
    details: "",
    name: "",
    url: "",
    image: "",
    rank: 1,
    price: 1,
    coinInfoLoader: false,
};

const CoinInfoReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case "COIN_INFO":{
            return {
                ...state,
                coinInfo: action.payLoad,
                name: action.payLoad.id,
                details: action.payLoad.description.en,
                url: action.payLoad.links.homepage[0],
                image: action.payLoad.image.small,
                rank: action.payLoad.market_cap_rank,
                price: action.payLoad.tickers[0].last,
                coinInfoLoader: false,
            }
        };

        case "COIN_LOADER":{
            return {
                ...state,
                coinInfoLoader: action.payLoad,
            }
        }
        default: return state;
    }
};

export default CoinInfoReducer;