import $ from 'jquery';

export function getDifficulty() {
    return $.ajax({
        url: 'https://api.blockchain.info/stats',
        type: 'GET',
        data: {cors: true},
        dataType: 'json'
    });

}