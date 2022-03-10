export const settings = {
    canvasWidth: 0.8,
    canvasHeight: 0.6,
    gradient: [
        'hsl(165, 19%, 40%)',
        'hsl(133, 18%, 59%)',
    ],
    bubble: {
        radius: {
            min: 10,
            max: 30,
        },
        speed: {
            x: {min: -2,  max: 2},
            y: {min: 3,  max: 7},
        },
        /*colors: [
            ['201', '20', '23'],
            ['186', '21', '26'],
            ['165', '19', '40'],
            ['133', '18', '59'],
            ['97', '13', '80'],
        ],*/
        colors:
            [
                'hsl(201, 20%, 23%)',
                'hsl(186, 21%, 26%)',
                'hsl(165, 19%, 40%)',
                'hsl(133, 18%, 59%)',
                'hsl(97, 13%, 80%)'
            ],
        maxCount: 5,
    },

}