const express = require("express");
const router = express.Router();

const TripCtrl = require("../controllers/trip");
const UserCtrl = require("../controllers/user");
// // get the trip id document on which I am added as a friend
router.get("/others",UserCtrl.authMiddleware, TripCtrl.getTripsAsFrnd);

router.get("/",UserCtrl.authMiddleware, TripCtrl.getTrips);
router.post("/", UserCtrl.authMiddleware, TripCtrl.addNewTrip);
router.get("/:tripname",UserCtrl.authMiddleware, TripCtrl.getSingleTripDetails);
router.put("/:tripname",UserCtrl.authMiddleware, TripCtrl.updateTripData);
router.delete("/:tripname",UserCtrl.authMiddleware, TripCtrl.deleteTrip);

//add friend
router.patch("/friends/:tripid",UserCtrl.authMiddleware, TripCtrl.addFriend);
router.delete("/friends/:tripid",UserCtrl.authMiddleware, TripCtrl.rmvFriend);


module.exports = router;