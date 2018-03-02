import $ from 'jquery';

export function getInfo() {
    return $.ajax({
        url: 'https://api.blockchain.info/stats',
        type: 'GET',
        dataType: 'json',
        data: {cors: true}
    });
}