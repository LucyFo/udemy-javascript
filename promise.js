function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел ...');

    setTimeout(function () {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 3000)
};

shoot({},
    function (mark) {
        console.log('Вы попали в цель');
    },
    function (miss) {
        console.error(miss)
    }
)