import $ from 'jquery';

export function getDifficulty() {
    return $.ajax({
        url: 'https://api.blockchain.info/stats?cors=true',
        type: 'GET',
        dataType: 'json'
    });

}