/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            }, {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }]
    }   
);
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', {
        pageheader: {
            title: 'Starcups',
        },
        sidebartop: "Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
        sidebarbottom: "if you've been and you like it - or if you don't - please leave a review to help other people just like you.",
        rating: 3,
        address: '125 High Street, Reading, RG6 1PS',
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        days: ['Monday - Friday : 7:00am - 7:00pm', 'Saturday : 8:00am - 5:00pm','Sunday : closed']
    });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};