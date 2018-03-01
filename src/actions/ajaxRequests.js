import $ from 'jquery';

export function getDifficulty() {
    return $.ajax({
        url: 'https://api-r.bitcoinchain.com/v1/status',
        type: 'GET',
        dataType: 'json'
    });

}