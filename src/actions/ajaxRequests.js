import $ from 'jquery';


export function getInfo() {
    return $.ajax({
        url: 'https://api.blockchain.info/stats',
        type: 'GET',
        dataType: 'json',
        data: {cors: true}
    });
}

export function getKrakenTicker(TICKER_TYPE) {
    return $.ajax({
        url: 'https://api.kraken.com/0/public/Ticker',
        type: 'GET',
        data: {
            pair: TICKER_TYPE
        },
    });
}